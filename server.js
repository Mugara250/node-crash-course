const http = require("http");
const fs = require("fs");
const _ = require("lodash");
// create the server
const server = http.createServer((request, response) => {
  const num = _.random(0, 20);
  console.log(num);
  let path = "./views/";
  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      break;
    case "/about-me":
      response.statusCode = 301;
      response.setHeader("Location", "/about");
      break;
    default:
      path += "error.html";
      response.statusCode = 404;
  }

  response.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.end(data);
    }
  });
});

const PORT = 3000;
// starting the server
server.listen(PORT, "localhost", () => {
  console.log(`Server has started listening on port ${PORT}`);
});
