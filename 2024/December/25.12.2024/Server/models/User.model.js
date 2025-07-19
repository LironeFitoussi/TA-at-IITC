const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date
  },
});

// Schema options to include virtuals
userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

userSchema.virtual("fullname").get(function() {
  return `${this.fName} ${this.lName}`; // Access instance properties with 'this'
});

userSchema.virtual("jokes", {
  ref: "Joke",
  localField: "_id",
  foreignField: "author"
})

module.exports = mongoose.model('User', userSchema)