const { convertToTimeFormat, convertToSeconds, timeToSeconds, secondsToTime } = require("../helpers/convert.helper.cjs");


exports.calculateTravelDuration = (req, res) => {
  const { startTime, durationInSeconds } = req.body;

    if (!startTime || !durationInSeconds) {
        return res.status(400).json({ message: 'Input tidak valid. Masukkan startTime dan durationInSeconds.' });
    }

    const [startHour, startMinute, startSecond] = startTime.split(':').map(Number);
    const travelDuration = Number(durationInSeconds);

    if (
        isNaN(startHour) || isNaN(startMinute) || isNaN(startSecond) ||
        isNaN(travelDuration)
    ) {
        return res.status(400).json({ message: 'Input waktu tidak valid.' });
    }

    const startInSeconds = timeToSeconds(startHour, startMinute, startSecond);
    
    const arrivalInSeconds = (startInSeconds + travelDuration) % 86400; // 86400 detik dalam satu hari

    const arrivalTime = secondsToTime(arrivalInSeconds);

    res.json({ arrivalTime });
}