# Discord OAuth Demo

A Node.js application demonstrating Discord OAuth integration. Users can log in with Discord and access a locked page if authorized.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [License](#license)

## Prerequisites

- [Node.js (v20 or higher)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [npm (Node Package Manager)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [A Discord Developer account](https://discord.com/developers/applications)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/athenarebeldev/discord-oauth-demo.git
   ```
2. **Navigate to the project directory:**
  ```bash
  cd discord-oauth-demo
  ```
3. **Install dependencies:**
   ```
   npm install
   ```

## Configuration

1. **Create a .env file in the root directory:**
   ```
   touch .env
   ```
2. **Add the following environment variables to your .env file:**
   ```
   CLIENT_ID=your_discord_client_id
   CLIENT_SECRET=your_discord_client_secret
   REDIRECT_URI=http://localhost:3000/callback
   SESSION_SECRET=your_session_secret
   ```

## Running the Application

1. **Start the application:**
   ```
   npm start
   ```
2. **Open your browser and navigate to:**
   [http://localhost:3000](http://localhost:3000)
3. **Log in with Discord by visiting:**
   [http://localhost:3000/login](http://localhost:3000/login)

## Usage

> Login: Navigate to [/login](http://localhost:3000/login) to start the Discord OAuth authentication process.
> 
> Locked Page: Access [/locked](http://localhost:3000/locked) after successful login to view the protected content.
> 
> Logout: Visit [/logout](http://localhost:3000/logout) to log out and be redirected to the homepage.

