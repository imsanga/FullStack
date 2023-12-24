/*Middleware:
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
Middleware functions can perform the following tasks:
-> Execute any code.
-> Make changes to the request and the response objects.
-> End the request-response cycle.
-> Call the next middleware function in the stack.
-> If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
*/

//Middleware
const myServer1 = require("http");
const myExpress = require("express");
const app = myExpress();

app.use((req, res, next) => {
  console.log("First Middleware");
  next();
});
app.use((req, res, next) => {
  console.log("second Middleware");
  next();
});
app.use((req, res) => {
  //res.send("<h1>Express - Middleware</h1");//html data
  res.send("Express - Middleware");
  //res.send({ data: "json" }); //json data
  console.log("Third Middleware");
});
myServer1.createServer(app).listen(5500);

// we can use .listen() instead of using core http module
const myExpress = require("express");
const app2 = myExpress();

app2.use((req, res, next) => {
  console.log("First Middleware");
  next();
});
app2.use((req, res, next) => {
  console.log("second Middleware");
  next();
});
app2.use((req, res) => {
  res.send("Express - Middleware");
  console.log("Third Middleware");
});

app2.listen(5500);
