const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes/blogRoutes")
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

// blogs
app.use("/blogs", blogRoutes )

// 404 error
app.use((request, response) => {
  response.status(404).render("error");
});
