const express = require('express');
const durationRouter = require('./duration.router.cjs');
const timeRouter = require('./time.router.cjs'); // Example of an additional router

const router = express.Router();

router.use('/duration', durationRouter);
router.use('/calculate-arrival-time', timeRouter); // Example endpoint

module.exports = router;
