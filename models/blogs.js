const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating the schema
const blogSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, { timestamps: true});

// wrapping a model around the schema
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
