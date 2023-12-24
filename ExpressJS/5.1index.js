//5.1 - indexPage
const myExpress = require("express");
const app5 = myExpress();
const bodyParser = require("body-parser");
const adminRoutes = require("./5.2routes");

app5.use(bodyParser.urlencoded({ extended: true }));
app5.use(adminRoutes);
app5.listen(5500);
