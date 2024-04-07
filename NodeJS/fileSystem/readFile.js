var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("testHTML.html", function (err, data) {
      if (err) {
        // If there's an error reading the file, send a 404 response
        console.log(err);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        // If the file is successfully read, send its contents as the response
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(5500);
