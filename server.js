const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,  
      secure: process.env.NODE_ENV === 'production',  
      maxAge: 3600000 
    }
}));

passport.use(new DiscordStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.REDIRECT_URI,
  scope: ['identify', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });
app.get('/login', passport.authenticate('discord'));

app.get('/callback', passport.authenticate('discord', {
  failureRedirect: '/' 
}), (req, res) => {
  res.redirect('/locked');
});

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();  
  }
  res.redirect('/login');
}

app.get('/locked', checkAuth, (req, res) => {
  res.send(`Welcome ${req.user.username}! This is the locked page.`);
});

app.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/');  
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
