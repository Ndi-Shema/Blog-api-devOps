const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
require('dotenv').config();

const app = express();
app.use(express.json());

const logger = require('./logger');

// Example usage:
logger.info('Server is starting...');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('MongoDB connected successfully');
  })
  .catch((err) => {
    logger.error('MongoDB connection error:', err);
  });

// Set up routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
