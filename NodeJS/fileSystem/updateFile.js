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
