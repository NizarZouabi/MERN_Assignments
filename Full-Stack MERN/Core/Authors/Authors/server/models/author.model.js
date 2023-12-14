const mongoose = require("mongoose");

const Author = new mongoose.Schema(
  {
    name: {
      type: String,
          required: [true, "Name is required"],
          minlength: [3, "Name must be at least 3 characters long."]
    },
  },
  { timestamps: true }
);

const AuthorSchema = mongoose.model("AuthorSchema", Author);
module.exports = AuthorSchema;