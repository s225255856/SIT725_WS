const express = require('express');
const router = express.Router();

//Import all controllers via index.js
const cardController = require('../controllers');

//simple GET route
router.get('/', cardController.getAllCard);

module.exports = router;