import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("connection succesfull!");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};
