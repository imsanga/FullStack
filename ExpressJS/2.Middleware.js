/*Middleware:
It is a function that sits between the request (req) and the response (res). It processes requests before they reach the final route handler.

flow: Client → Request → Middleware 1 → Middleware 2 → Route Handler → Response → Client
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
