const http = require("http");
const fs = require("fs");
// create the server
const server = http.createServer((request, response) => {
    console.log(request.url, request.method);

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
    })
});

const PORT = 3000;
// starting the server
server.listen(PORT, "localhost", () => {
    console.log(`Server has started listening on port ${PORT}`);
})

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}