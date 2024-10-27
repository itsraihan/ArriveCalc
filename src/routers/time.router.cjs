const express = require('express');
const { calculateArrivalTime } = require('../controllers/time.controller.cjs');
const timeRouter = express.Router();


timeRouter.post('/', calculateArrivalTime);

module.exports = timeRouter;
