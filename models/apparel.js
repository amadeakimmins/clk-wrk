const mongoose = require('mongoose');

const apparelSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }
});

// will need to add a form that means the user can put a request in for an order
