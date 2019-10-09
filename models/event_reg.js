const mongoose = require('mongoose');

const form = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'events'},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users'}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Evenetregistration', form);