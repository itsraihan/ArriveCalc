const { convertToSeconds, convertToTimeFormat } = require("../helpers/convert.helper.cjs");

exports.calculateArrivalTime = (req, res) => {
  const { departure, arrival } = req.body;

    // Validasi input
    if (!departure || !arrival) {
        return res.status(400).json({ error: 'Harap berikan waktu keberangkatan dan waktu kedatangan dalam format hh:mm:ss.' });
    }

    const [depHours, depMinutes, depSeconds] = departure.split(':').map(Number);
    const [arrHours, arrMinutes, arrSeconds] = arrival.split(':').map(Number);

    // Konversi waktu ke dalam detik
    const depTimeInSeconds = convertToSeconds(depHours, depMinutes, depSeconds);
    const arrTimeInSeconds = convertToSeconds(arrHours, arrMinutes, arrSeconds);

    // Hitung durasi perjalanan
    let durationInSeconds;
    if (arrTimeInSeconds >= depTimeInSeconds) {
        // Jika tiba di hari yang sama atau lebih lambat di hari yang sama
        durationInSeconds = arrTimeInSeconds - depTimeInSeconds;
    } else {
        // Jika tiba di hari berikutnya
        durationInSeconds = (24 * 3600 - depTimeInSeconds) + arrTimeInSeconds;
    }

    // Konversi kembali ke format jam:menit:detik
    const travelDuration = convertToTimeFormat(durationInSeconds);

    // Kirimkan hasilnya
    res.json({ travelDuration });
}