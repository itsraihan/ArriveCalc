const { convertToSeconds, convertToTimeFormat } = require("../helpers/convert.helper.cjs");

exports.calculateArrivalTime = (req, res) => {
    const { departure, arrival } = req.query;

    if (!departure || !arrival) {
        return res.status(400).json({ error: 'Harap berikan waktu keberangkatan dan waktu kedatangan dalam format hh:mm:ss.' });
    }

    const [depHours, depMinutes, depSeconds] = departure.split(':').map(Number);
    const [arrHours, arrMinutes, arrSeconds] = arrival.split(':').map(Number);

    const depTimeInSeconds = convertToSeconds(depHours, depMinutes, depSeconds);
    const arrTimeInSeconds = convertToSeconds(arrHours, arrMinutes, arrSeconds);

    let durationInSeconds;
    if (arrTimeInSeconds >= depTimeInSeconds) {
        durationInSeconds = arrTimeInSeconds - depTimeInSeconds;
    } else {
        durationInSeconds = (24 * 3600 - depTimeInSeconds) + arrTimeInSeconds;
    }

    const travelDuration = convertToTimeFormat(durationInSeconds);

    res.json({ travelDuration });
}