//HelloWorld!
const myServer1 = require("http");
const myExpress = require("express");
const app = myExpress();

app.use((req, res) => res.send("U must Achieve Sanga!!!"));
myServer1.createServer(app).listen(5500);

// const myExpress = require("express");
// const app = myExpress();

// app
//   .use("/", (req, res) => {
//     console.log(`reqUrl: ${req.url}, reqMethod: ${req.method}`);
//     res.send("Sanga");
//   })
//   .listen(5500);
