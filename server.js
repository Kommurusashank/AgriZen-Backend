const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const cropRoutes = require("./routes/cropRoutes");
const recommendRoutes = require("./routes/recommendRoutes");
const diseaseRoutes = require("./routes/diseaseRoutes");
const yieldRoutes = require("./routes/yieldRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const profileRoutes = require("./routes/profileRoutes");
const aiRoutes = require("./routes/aiRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/crops", cropRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/disease", diseaseRoutes);
app.use("/api/yield", yieldRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/ai", aiRoutes);
app.get("/", (req, res) => {
  res.send("🌱 AgriZen Backend Running Successfully...");
});

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "AgriZen API Working Successfully 🚀",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});