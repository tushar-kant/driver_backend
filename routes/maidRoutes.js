const express = require('express');
const router = express.Router();
const maidController = require('../controllers/maidController');

// Get all maids
router.get('/', maidController.getAllMaids);

// Get a specific maid by ID
router.get('/:id', maidController.getMaidById);

// Get maids by location (city)
router.get('/location', maidController.getMaidsByLocation);

// Search maids by name, city, state, postcode, or country
router.get('/search', maidController.searchMaids);

// Add a new maid
router.post('/', maidController.addMaid);

module.exports = router;
