const express = require('express');
const { calculateTravelDuration } = require('../controllers/duration.controller.cjs');
const durationRouter = express.Router();

durationRouter.post('/', calculateTravelDuration);

module.exports = durationRouter;
