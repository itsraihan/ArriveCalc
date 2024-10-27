const express = require('express');
const { default: timeRouter } = require('./routers/time.router.cjs');
const { default: durationRouter } = require('./routers/duration.router.cjs');
const app = express();
const router = require('./routers/index.router.cjs');

// Middleware untuk parsing body JSON
app.use(express.json());

app.use('/api', router);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
