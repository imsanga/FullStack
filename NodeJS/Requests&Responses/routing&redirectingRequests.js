//Routing Requests
const myServer7 = require("http");
myServer7
  .createServer((request, response) => {
    const url = request.url;
    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<html>");
      response.write("<head><title>Forms</title></head>");
      response.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit"></form></body>'
      );
      response.write("</html>");
      return response.end();
    }

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html>");
    response.write("<head><title>Forms</title></head>");
    response.write("<body><h1>Form Submitted successfully!!!</h1></body>");
    response.write("</html>");
    response.end();
  })
  .listen(5500);

//Redirecting Requests
const myServer8 = require("http");
const myFileSystem1 = require("fs");
myServer8
  .createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<html>");
      response.write("<head><title>Forms</title></head>");
      response.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit"></form></body>'
      );
      response.write("</html>");
      return response.end();
    }
    if (url === "/message" && method == "POST") {
      myFileSystem1.writeFileSync("node.txt", "U must achieve Sanga!!!");
      // response.setHeader("Location", "/");
      // response.statusCode = 302;
      response.writeHead(302, { Location: "/submission" });
      return response.end();
    }
    if (url === "/submission") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<html>");
      response.write("<head><title>Forms</title></head>");
      response.write("<body><h1>Form Submitted successfully!!!</h1></body>");
      response.write("</html>");
      return response.end();
    }

    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<html>");
    response.write("<head><title>404 Error</title></head>");
    response.write("<body><h1>404 Page not found!!!</h1></body>");
    response.write("</html>");
    response.end();
  })
  .listen(5500);
