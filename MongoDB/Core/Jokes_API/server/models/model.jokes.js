const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Fill in the Setup"],
    },
    punchline: {
      type: String,
      required: [true, "Fill in the Punchline"],
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke