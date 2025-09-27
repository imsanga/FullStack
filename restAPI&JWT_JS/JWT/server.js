require("dotenv").config();

const express = require("express");
const myApp = express();
const jwt = require("jsonwebtoken");

myApp.use(express.json());

const posts = [
  {
    username: "Sanga",
    title: "Post 1",
  },
  {
    username: "Santha",
    title: "Post 2",
  },
];

myApp
  .get("/posts", authenticateToken, (req, res) => {
    res.json(posts.filter((post) => post.username === req.user.name));
  })
  .listen(5500, () => console.log("server is running on Port 5500!"));

myApp.post("/login", (req, res) => {
  // Authenticate user
  const username = req.body.username;
  const user = { name: username };

  const newAccessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: newAccessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
