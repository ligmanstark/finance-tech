const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

console.log(process.env.MONGO_URI);
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

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true
  }),
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/health", function (req, res) {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
