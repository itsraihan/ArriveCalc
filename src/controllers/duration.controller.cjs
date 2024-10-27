const { convertToTimeFormat, convertToSeconds } = require("../helpers/convert.helper.cjs");


exports.calculateTravelDuration = (req, res) => {
  const { departure, arrival } = req.body;

  // Validate input
  if (!departure || !arrival) {
      return res.status(400).json({ error: 'Please provide both departure and arrival times in hh:mm:ss format.' });
  }

  const [depHours, depMinutes, depSeconds] = departure.split(':').map(Number);
  const [arrHours, arrMinutes, arrSeconds] = arrival.split(':').map(Number);

  // Convert time to seconds
  const depTimeInSeconds = convertToSeconds(depHours, depMinutes, depSeconds);
  const arrTimeInSeconds = convertToSeconds(arrHours, arrMinutes, arrSeconds);

  // Calculate duration in seconds
  let durationInSeconds;
  if (arrTimeInSeconds >= depTimeInSeconds) {
      // Arrival is on the same day or later in the day
      durationInSeconds = arrTimeInSeconds - depTimeInSeconds;
  } else {
      // Arrival is on the next day
      durationInSeconds = (24 * 3600 - depTimeInSeconds) + arrTimeInSeconds;
  }

  // Convert back to hh:mm:ss format
  const travelDuration = convertToTimeFormat(durationInSeconds);

  // Send the result
  res.json({ travelDuration });
}