//Routing different URLs
const myExpress = require("express");
const app3 = myExpress();

app3.use("/page2", (req, res, next) => {
  res.send("ExpressPage2 - Middleware");
  console.log("2nd Middleware");
});
app3.use("/page3", (req, res) => {
  res.send("ExpressPage3 - Middleware");
  console.log("3rd Middleware");
});

//we should give the root url in last(it runs for all URLs)
app3.use("/", (req, res, next) => {
  res.send("ExpressPage1 - Always Middleware");
  console.log("1st Always Middleware");
});

app3.listen(5500);
