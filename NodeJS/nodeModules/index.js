// #indexPage
const myServer12 = require("http");
const dummyServer = require("./routes");
// myServer12.createServer(dummyServer).listen(5500);

//exporting multiple fnc
myServer12.createServer(dummyServer.handler).listen(5500);
