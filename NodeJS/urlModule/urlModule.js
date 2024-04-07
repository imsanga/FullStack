const sangaServer = require("http");
const localhostURL = require("url");
sangaServer
  .createServer((req, res) => {
    let parsedURL = localhostURL.parse(req.url, true).query;
    console.log(localhostURL.parse(req.url, true));
    res.writeHead(200, { "content-type": "text/html" });
    res.write(parsedURL.year);
    res.write(parsedURL.month);
    res.end();
  })
  .listen(5500);

//Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q);
    var filename = `.${q.pathname}`;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(5500);
