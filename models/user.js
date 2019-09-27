const mongoose = require('mongoose');

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 255
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 255
    },
    password: { type: String, required: true, min: 6, max: 1024 },
    avatar: {
      type: String
    },
    date: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', Userschema);