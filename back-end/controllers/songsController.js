const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/song");
const {
  checkName,
  checkArtist,
  checkBoolean,
} = require("../validations/checkSongs");

// INDEX
songs.get("/", async (request, response) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    response.status(200).json(allSongs);
  } else {
    response.status(500).json({ error: "server error" });
  }
});

// SHOW
songs.get("/:id", async (request, response) => {
  const { id } = request.params;
  const song = await getSong(id);
  if (song) {
    response.json(song);
  } else {
    response.status(404).json({ error: "not found" });
  }
});

// CREATE
songs.post(
  "/",
  checkName,
  checkArtist,
  checkBoolean,
  async (request, response) => {
    const song = await createSong(request.body);
    response.json(song);
  }
);

// DELETE
songs.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    response.status(200).json(deletedSong);
  } else {
    response.status(404).json("Song not found!");
  }
});

// UPDATE
songs.put(
  "/:id",
  checkName,
  checkArtist,
  checkBoolean,
  async (request, response) => {
    const { id } = request.params;
    const updatedSong = await updateSong(id, request.body);
    response.status(200).json(updatedSong);
  }
);

module.exports = songs;
