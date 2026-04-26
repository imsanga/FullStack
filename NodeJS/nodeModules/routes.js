// #routing
const fs = require("fs");
const requestHandler = (request, response) => {
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
    const body = [];
    request.on("data", (dummy) => {
      body.push(dummy);
    });
    return request.on("end", () => {
      console.log("End Event Received");
      const parsedBody = Buffer.concat(body).toString();
      const message1 = parsedBody.split("=");
      fs.writeFile("node.txt", message1[1], (error) => {
        if (error) console.log(error);
        else {
          console.log("Filewrite Completed");
          response.setHeader("Location", "/");
          response.statusCode = 302;
          return response.end();
        }
      });
    });
  }

  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>Sanga</title></head>");
  response.write("<body><h1>Node.js!!!</h1></body>");
  response.write("</html>");
  response.end();
};

// Exporting single fnc
module.exports = requestHandler;

// //Exporting Multiple Fnc
// module.exports = {
//   handler: requestHandler,
//   sometext: "Come On Sanga!!!",
// };

// //Exports in NodeJS_1;
// exports.handler = requestHandler;
// exports.sometext = "Sanga, Never ever Give up";

// //Exports in NodeJS_2
// module.exports.handler = requestHandler;
// module.exports.sometext = "Sanga, Never ever Give up";
