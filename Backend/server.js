const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
 res.send("Student Management System API is running");
});
const PORT = process.env.PORT || 5000;

const studentRoutes = require("./routes/StudentRoutes");
app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});