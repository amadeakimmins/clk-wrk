const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  ticketLink: { type: String },
  ticketPrices: { type: Number },
  image: { type: String, required: true },
});

eventSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('Event', eventSchema);
