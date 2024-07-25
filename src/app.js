const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
