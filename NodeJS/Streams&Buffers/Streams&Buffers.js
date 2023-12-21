//Streams&Buffers
const myServer9 = require("http");
const myFileSystem2 = require("fs");
myServer9
  .createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === "/") {
      response.setHeader("Content-Type", "text/html");
      response.write("<html>");
      response.write("<head><title>Forms</title></head>");
      response.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit"></form></body>'
      );
      response.write("</html>");
      return response.end();
    }
    if (url === "/message" && method == "POST") {
      const receivedMessage = [];
      request.on("data", (chunk) => receivedMessage.push(chunk));
      request.on("end", () => {
        const storedMessage = Buffer.concat(receivedMessage).toString();
        const extractMessage = storedMessage.split("=");
        myFileSystem2.writeFileSync(
          "node.txt",
          `U must achieve ${extractMessage[1]}!!!`
        );
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>Sanga</title></head>");
        response.write(
          `<body><h1>U must achieve ${extractMessage[1]}!!!</h1></body>`
        );
        response.write("</html>");
        response.end();
      });
    }
  })
  .listen(5500);
