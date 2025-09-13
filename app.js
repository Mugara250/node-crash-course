const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// starting the server
app.listen(3000);

// listening for and responding to requests
app.get("/", (request, response) => {
    const blogs = [
        {title: "Yoshi finds eggs", snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: "Mario finds stars", snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: "How to defeat bowser", snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
  response.render("index", { title: "Home", blogs });
});

app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

app.get("/blogs/create", (request, response) => {
  response.render("create", { title: "Create" });
});

// 404 error
app.use((request, response) => {
  response.status(404).render("error");
});
