//Creating a server
//Example: 1
const myServer1 = require("http");
myServer1
  .createServer((req, res) => {
    console.log(req);
    process.exit(); //it stops the execution
  })
  .listen(5500);

//Example: 2
// const myServer2 = require("http");
// const server = myServer2.createServer((request, response) => {
//   console.log(request);
//   process.exit();
// });

// server.listen(5500);
