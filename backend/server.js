const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection with retry
const connectionWithRetry = async (attempts = 3) => {
  for (let i = 0; i < attempts; i++) {
    try {
      await mongoose
        .connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("Connected to MongoDB");
        });
    } catch (error) {
      console.warn(
        `Error connecting to MongoDB - ${error}, trying retry to connect to MongoDB. Attempting to connect to MongoDB - ${i}`,
      );
      if (i < attempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        console.log("MongoDB connection failed");
        process.exit(-1);
      }
    }
  }
};

connectionWithRetry();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Health check route
app.get("/health", function (req, res) {
  res.json({ status: "ok" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
