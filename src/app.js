const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");

const { connectDB } = require("./config/db");

dotenv.config();

const app = express();

// Initialize DB (Prisma)
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use(express.json());

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/tasks", require("./routes/taskRoutes"));
app.use("/api/v1/admin", adminRoutes);


// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
