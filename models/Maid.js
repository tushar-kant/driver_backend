const mongoose = require('mongoose');

// Define the Maid schema
const maidSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postcode: { type: String, required: true },
  country: { type: String, required: true },
  experience: { type: Number, required: true }, // In years
  rating: { type: Number, min: 0, max: 5 }, // Rating from 0 to 5
  services: { type: [String], required: true }, // List of services like cleaning, cooking, etc.
  photoUrl: { type: String, default: 'https://via.placeholder.com/150' }, // Default photo if none provided
  reviews: [{ 
    user: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  }],
});

// Create the Maid model

module.exports = mongoose.model('Maid', maidSchema);
