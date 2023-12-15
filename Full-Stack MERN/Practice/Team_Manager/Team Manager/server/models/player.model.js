const mongoose = require("mongoose");

const Player = new mongoose.Schema(
  {
    playerName: {
      type: String,
      required: [true, "Player Name is required"],
      minlength: [2, "Player Name must be at least 2 characters long."],
    },
    preferredPosition: {
      type: String,
    },
    status: {
      type: String,
      enum: ["undecided", "not playing", "playing"],
      default: "undecided",
    },
  },
  { timestamps: true }
);

const PlayerSchema = mongoose.model("PlayerSchema", Player);
module.exports = PlayerSchema;