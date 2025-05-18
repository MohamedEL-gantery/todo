import mongoose from "mongoose";

const connectDB = (url) => {
  if (!url) {
    throw new Error("MongoDB connection URL is required");
  }

  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.log("MongoDB connection failed", err.message);
    });
};

export default connectDB;
