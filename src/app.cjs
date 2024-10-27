const express = require("express");
const app = express();
const router = require("./routers/index.router.cjs");

// Middleware untuk parsing body JSON
app.use(express.json());

app.use("/api", router);

app.use((_req, res, _next) => {
    res.status(404).json({ message: "Resource not found" });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
