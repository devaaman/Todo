const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    min: 8,
    max: 32,
    required: true,
  },
  password: {
    type: String,
    min: 8,
    max: 32,
    required: true,
  },
  email: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("User", userSchema);
