//Getting Requests - url
const myServer3 = require("http");
myServer3
  .createServer((request, response) => {
    console.log(request.url); //displays root url as"/" or the specified url "/homePage"
    process.exit();
  })
  .listen(5500);

//Getting Requests - Method
const myServer4 = require("http");
myServer4
  .createServer((request, response) => {
    console.log(request.method); //displays the request method(eg: GET, POST)
    process.exit();
  })
  .listen(5500);

//Getting Requests - Headers
const myServer5 = require("http");
myServer5
  .createServer((request, response) => {
    console.log(request.headers); //displays the headers, which will be send during request(eg: accept:text/html, host:"localhost:5500")
    process.exit();
  })
  .listen(5500);
