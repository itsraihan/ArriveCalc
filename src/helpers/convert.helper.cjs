// Function untuk mengonversi waktu (jam, menit, detik) ke detik total
function convertToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

// Function untuk mengonversi detik total ke format jam:menit:detik
function convertToTimeFormat(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function timeToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

// Fungsi untuk mengonversi detik total menjadi format jam:menit:detik
function secondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}


module.exports = {
  convertToSeconds,
  convertToTimeFormat,
  timeToSeconds,
  secondsToTime
}