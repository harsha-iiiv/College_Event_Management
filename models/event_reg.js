const mongoose = require('mongoose');

const form = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Evenetregistration', form);