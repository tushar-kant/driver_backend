const express = require('express');
const router = express.Router();
const maidController = require('../controllers/maidController');

// Get all maids
router.get('/', maidController.getAllMaids);
router.get('/location', maidController.getMaidsByLocation);
router.get('/search', maidController.searchMaids);
router.get('/:id', maidController.getMaidById);
router.post('/', maidController.addMaid);

module.exports = router;
