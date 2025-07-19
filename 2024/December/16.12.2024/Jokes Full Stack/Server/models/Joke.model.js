const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required!"],
    minlength: [10, "Setup must be at least 10 characters long."],
    unique: [true, "Setup must be unique!"],
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required!"],
    minlength: [3, "Punchline must be at least 3 characters long."],
  },
  likes: {
    type: Number,
    default: 0, // Default value if not provided
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date
  },
});

module.exports = mongoose.model('Joke', jokeSchema);