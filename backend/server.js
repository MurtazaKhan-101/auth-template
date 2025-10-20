const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconnect");
const { createTransporter, testEmailConnection } = require("./config/email");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/auth", require("./routes/googleAuthRoutes"));

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Hyper Thread API is running!", status: "healthy" });
});

const startServer = async () => {
  try {
    await connectDB();
    await testEmailConnection(createTransporter());
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
