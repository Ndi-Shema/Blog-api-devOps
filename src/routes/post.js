const express = require('express');
const router = express.Router();

// Assuming you have a controller function like this
const { createPost } = require('../controllers/postController');

router.post('/create', createPost);  // Make sure 'createPost' is defined and imported correctly

module.exports = router;
