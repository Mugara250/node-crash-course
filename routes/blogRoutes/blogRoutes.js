const express = require("express");
const Blog = require("../../models/blogs");
const router = express.Router();
const {
  blog_create_get,
  blog_create_post,
  blog_details,
  blog_delete,
  blog_index,
} = require("../../controllers/blogControllers/blogControllers");

router.get("/create", blog_create_get);

router.post("/", blog_create_post);

router.get("/:id", blog_details);

router.delete("/:id", blog_delete);

router.get("/", blog_index);

module.exports = router;
