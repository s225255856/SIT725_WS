const express = require('express');
const router = express.Router();

//Import all controllers via index.js
const Controllers = require('../controllers');

//simple GET route
router.get('/', Controllers.cardController.getAllCard);

module.exports = router;