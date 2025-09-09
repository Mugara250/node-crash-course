const fs = require("fs");

// creating the read stream
const readStream = fs.createReadStream("./docs/large_text_file.txt", {encoding: "utf-8"});
const writeStream = fs.createWriteStream("./docs/large_text_file1.txt");
// listening for the data event on the read stream to have access to the arrived chunk of data
readStream.on("data", (chunk) => {
    console.log("---NEW CHUNK ARRIVED---")
    console.log(chunk);
    writeStream.write("\n---NEW CHUNK ARRIVED---\n",);
    writeStream.write(chunk);
})

// piping
readStream.pipe(writeStream);