const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to Turner");
});

module.exports = app;
