import mongoose from "mongoose";

let isConnected = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    // Remove the deprecated options
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-estate",
    });
    
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error", error);
    throw error; // Consider throwing to handle upstream
  }
};