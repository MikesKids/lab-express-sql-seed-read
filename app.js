const cors = require("cors");
const express = require("express");
const songsController = require("./controllers/songsController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to Turner");
});

app.use("/songs", songsController);

app.get("*", (request, response) => {
  response.status(404).send("Page not found");
});

module.exports = app;
