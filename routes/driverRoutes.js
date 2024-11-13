// routes/driverRoutes.js
const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

// Other routes
router.get('/', driverController.getAllDrivers);  // Get all drivers
router.get('/location', driverController.getDriversByLocation);  // Get drivers by location
router.get('/search', driverController.searchDrivers);  // Search drivers by name or city
router.get('/:id', driverController.getDriverById);  // Get a driver by ID (new route)
router.post('/', driverController.addDriver);  // Add a new driver

module.exports = router;
