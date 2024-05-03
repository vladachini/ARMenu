const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Server Configuration
const PORT = process.env.PORT || 3500;

// Export the app instance
module.exports = { app, PORT };