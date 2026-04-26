//writeFile
const myFileSystem = require("fs");
myFileSystem.writeFile("node.txt", "U must achieve Sanga!!!", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

//appendFile
const myFileSystem = require("fs");
myFileSystem.appendFile("node.txt", "U must achieve Sanga!!!", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

//open (note: file - A file descriptor is a unique identifier assigned by the operating system to an open file)
const myFileSystem = require("fs");
myFileSystem.open("node.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("Saved!");
});
