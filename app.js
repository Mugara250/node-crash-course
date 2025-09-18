const express = require("express");
const morgan = require("morgan");
const Blog = require("./models/blogs");
const mongoose = require("mongoose");
// express app
const app = express();

// mongodb connection
const dbURI =
  "mongodb+srv://Mugara:1234@nodetutorial.yh5z6dm.mongodb.net/NodeTutorial?retryWrites=true&w=majority&appName=NodeTutorial";
mongoose
  .connect(dbURI)
  .then((result) => {
    // starting the server once the connection has been made to the database
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/all-blogs", (request, response) => {
  Blog.find()
    .then((result) => response.send(result))
    .catch((err) => console.log(err));
});

app.get("/single-blog", (request, response) => {
  Blog.findById("68c82d99675e30b763d506d4")
    .then((result) => response.send(result))
    .catch((err) => console.log(err));
});
// listening for and responding to requests
app.get("/", (request, response) => {
  response.redirect("/blogs");
});

app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

app.get("/blogs/create", (request, response) => {
  response.render("create", { title: "Create" });
});

app.get("/blogs/:id", (request, response) => {
  const id = request.params.id;
  Blog.findById(id)
    .then((blog) => {
      response.render("details", { blog, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/blogs/:id", (request, response) => {
  const id = request.params.id;
  Blog.findByIdAndDelete(id)
    .then((blog) => {
      response.status(200).json({redirect: "/blogs"});
    })
    .catch((err) => {
      console.log(err);
    });
})

app.get("/blogs", (request, response) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      response.render("index", { title: "All Blogs", blogs });
    })
    .catch((err) => console.log(err));
});

app.post("/blogs", (request, response) => {
  const blog = new Blog(request.body);
  blog
    .save()
    .then((result) => {
      response.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

// 404 error
app.use((request, response) => {
  response.status(404).render("error");
});
