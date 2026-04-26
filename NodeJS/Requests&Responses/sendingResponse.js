//Sending Response
const myServer6 = require("http");
myServer6
  .createServer((req, res) => {
    // res.setHeader("Content-Type", "text/html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html>");
    res.write("<head><title>Dummy</title></head>");
    res.write("<body>U Must do it Sanga!!!</body>");
    res.write("</html>");
    res.end();
  })
  .listen(5500);
