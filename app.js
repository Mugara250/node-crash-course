const express = require("express");

// express app
const app = express();

// starting the server
app.listen(3000);

// listening for and responding to requests
app.get("/", (request, response) => {
  response.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (request, response) => {
  response.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-me", (request, response) => {
  response.redirect("/about");
});

// 404 error
app.use((request, response) => {
  response.status(404).sendFile("./views/error.html", { root: __dirname });
});
