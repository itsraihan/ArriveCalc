const express = require('express');
const { calculateTravelDuration } = require('../controllers/duration.controller.cjs');
const durationRouter = express.Router();

durationRouter.get('/', calculateTravelDuration);

module.exports = durationRouter;
