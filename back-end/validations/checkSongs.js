const checkName = (request, response, next) => {
  if (request.body.name) {
    return next();
  } else {
    response.status(400).json({ error: "Name is required" });
  }
};
const checkArtist = (request, response, next) => {
  if (request.body.artist) {
    return next();
  } else {
    response.status(400).json({ error: "Artist is required" });
  }
};

const checkBoolean = (request, response, next) => {
  if (
    typeof request.body.is_favorite === "boolean" ||
    request.body.is_favorite === "true" ||
    request.body.is_favorite === "false"
  ) {
    next();
  } else {
    response.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

module.exports = {
  checkName,
  checkArtist,
  checkBoolean,
};
