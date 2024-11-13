// controllers/driverController.js
const Driver = require('../models/Driver');

// Get all drivers
const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific driver by ID
const getDriverById = async (req, res) => {
  const { id } = req.params;  // Get the driver ID from the URL parameter
  try {
    const driver = await Driver.findById(id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get drivers by location (city)
const getDriversByLocation = async (req, res) => {
  const { city } = req.query;
  console.log('City parameter:', city); // Log the city parameter for debugging

  try {
    const drivers = await Driver.find(city ? { city } : {});
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Search drivers by name, city, state, postcode, or country
const searchDrivers = async (req, res) => {
    const { search } = req.query;
    try {
      const drivers = await Driver.find({
        $or: [
          { name: new RegExp(search, 'i') },
          { city: new RegExp(search, 'i') },
          { state: new RegExp(search, 'i') },
          { postcode: new RegExp(search, 'i') },
          { country: new RegExp(search, 'i') }
        ],
      });
      res.json(drivers);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  const addDriver = async (req, res) => {
    const { name, city, state, postcode, country, experience, rating, photoUrl, age, license, vehicleTypes, reviews } = req.body;
    try {
      const newDriver = new Driver({
        name,
        city,
        state,
        postcode,
        country,
        experience,
        rating,
        photoUrl: photoUrl || 'https://via.placeholder.com/150',  // Default photo if none provided
        age,
        license,
        vehicleTypes: vehicleTypes || [],
        reviews: reviews || [],
      });
  
      await newDriver.save();
      res.status(201).json(newDriver);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
module.exports = {
  getAllDrivers,
  getDriverById,
  getDriversByLocation,
  searchDrivers,
  addDriver,
};
