const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  playerName: String,
  playerAge: Number,
  playerPosition: String,
  playerNbr: Number,
  img:String
});

const player = mongoose.model("Player", playerSchema);
module.exports = player;