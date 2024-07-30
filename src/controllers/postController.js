const Post = require('../models/post');

exports.createPost = (req, res) => {
  // Your logic for handling post creation
  res.send('Post created!');
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
