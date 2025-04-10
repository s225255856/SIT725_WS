const express = require('express');
const router = express.Router();

const cardRouter = require('./cardRoute');

router.use('/cards', cardRouter);

module.exports = router;