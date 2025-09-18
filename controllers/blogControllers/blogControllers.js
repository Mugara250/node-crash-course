const Blog = require("../../models/blogs");

const blog_index = (request, response) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      response.render("index", { title: "All Blogs", blogs });
    })
    .catch((err) => console.log(err));
};

const blog_create_post = (request, response) => {
  const blog = new Blog(request.body);
  blog
    .save()
    .then((result) => {
      response.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_get = (request, response) => {
  response.render("blogs/create", { title: "Create" });
};

const blog_details = (request, response) => {
  const id = request.params.id;
  Blog.findById(id)
    .then((blog) => {
      response.render("blogs/details", { blog, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (request, response) => {
  const id = request.params.id;
  Blog.findByIdAndDelete(id)
    .then((blog) => {
      response.status(200).json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete,
}
