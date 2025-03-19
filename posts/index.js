const express = require("express");
const { randomBytes } = require("crypto");
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyparser.json());

const posts = {};
app.get("/posts", (req, res) => {
  return res.send(posts);
});
app.post("/posts", (req, res) => {
  const id = randomBytes(5).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts["id"]);
});
app.listen(4001, () => {
  console.log("Server is running at 4001 ");
});
