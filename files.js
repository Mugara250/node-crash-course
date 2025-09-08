const fs = require("fs");

// reading file contents
fs.readFile("./docs/text1.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

// console.log("Reading file...");

// writing files
// existing file
fs.writeFile("./docs/text1.txt", "Hello there!", () => {
    console.log("File written!");
})
// non-existing file
fs.writeFile("./docs/text2.txt", "Hello there!", () => {
    console.log("File written!");
})

console.log("Writing file...");

// directories
// creating a directory
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder created!");
    })
} else {
    // deleting directory
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder deleted!");
    })
}

// deleting files
if (fs.existsSync("./docs/text2.txt")) {
    fs.unlink("./docs/text2.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted!");
    })
}