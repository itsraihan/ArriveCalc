const express = require('express');
const { calculateArrivalTime } = require('../controllers/time.controller.cjs');
const timeRouter = express.Router();


timeRouter.get('/', calculateArrivalTime);

module.exports = timeRouter;
