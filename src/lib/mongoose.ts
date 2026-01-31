import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI missing in .env.local");
}

let isConnected = false;

export const connectDB = async () => {

  if (isConnected) {
    console.log("✅ Using existing DB connection");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true;

    console.log("✅ MongoDB Connected Successfully");

  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
  }
};
