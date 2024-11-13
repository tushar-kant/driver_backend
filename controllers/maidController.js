const Maid = require('../models/Maid');

// Get all maids
const getAllMaids = async (req, res) => {
  try {
    const maids = await Maid.find();
    res.json(maids);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific maid by ID
const getMaidById = async (req, res) => {
  const { id } = req.params;  // Get the maid ID from the URL parameter
  try {
    const maid = await Maid.findById(id);
    if (!maid) {
      return res.status(404).json({ message: 'Maid not found' });
    }
    res.json(maid);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get maids by location (city)
const getMaidsByLocation = async (req, res) => {
  
  const { city } = req.query;
  console.log('City parameter:', city); // Log the city parameter for debugging
  try {
    const maids = await Maid.find(city ? { city } : {});
    res.json(maids);
  } catch (error) {
    console.error('Error in getMaidsByLocation:', error); // Log the error for more information
    res.status(500).json({ message: 'Server Error' });
  }
};


// Search maids by name, city, state, postcode, or country
const searchMaids = async (req, res) => {
  const { search } = req.query;
  try {
    const maids = await Maid.find({
      $or: [
        { name: new RegExp(search, 'i') },
        { city: new RegExp(search, 'i') },
        { state: new RegExp(search, 'i') },
        { postcode: new RegExp(search, 'i') },
        { country: new RegExp(search, 'i') }
      ],
    });
    res.json(maids);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new maid
const addMaid = async (req, res) => {
  const { name, age, city, state, postcode, country, experience, rating, services, photoUrl, reviews } = req.body;
  try {
    const newMaid = new Maid({
      name,
      age,
      city,
      state,
      postcode,
      country,
      experience,
      rating,
      services,
      photoUrl: photoUrl || 'https://via.placeholder.com/150',  // Default photo if none provided
      reviews: reviews || [],
    });

    await newMaid.save();
    res.status(201).json(newMaid);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllMaids,
  getMaidById,
  getMaidsByLocation,
  searchMaids,
  addMaid,
};
