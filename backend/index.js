const express = require("express");
const cors = require("cors");
const app = express();
const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.get("/", (req, res) => {
  res.send("Amiga, funciona");
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server on : ${port}`);
});
