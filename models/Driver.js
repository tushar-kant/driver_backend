const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },  // State field
  postcode: { type: String, required: true },  // Postcode field
  country: { type: String, required: true },  // Country field
  experience: { type: String, required: true },
  rating: { type: Number, required: true },
  photoUrl: { type: String, default: 'https://via.placeholder.com/150' },  // Default image if no photo is provided
  age: { type: Number, required: true },
  license: { type: String, required: true },  // License type (e.g., 'Class A', 'Class B')
  vehicleTypes: { type: [String], default: [] },  // Array of vehicle types the driver can drive (e.g., ['Car', 'Truck'])
  reviews: [{
    username: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  }],
});

module.exports = mongoose.model('Driver', driverSchema);
