const express = require('express');
const router = express.Router();

const cardRouter = require('./cardRoute');

router.use('/projects', cardRouter);

module.exports = router;