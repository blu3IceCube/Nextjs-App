import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.URI);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};
