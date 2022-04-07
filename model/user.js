// S3 Create user model and route

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: String,
  interest: Number,
  email: { type: String, unique: true },
  password: String,
  token: String,
});

module.exports = mongoose.model("user", userSchema);
