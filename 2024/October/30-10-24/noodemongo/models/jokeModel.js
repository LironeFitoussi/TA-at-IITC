import mongoose from "mongoose"

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Joke', jokeSchema);

