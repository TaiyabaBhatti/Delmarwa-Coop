import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected successfully, Host - ${connection.connection.host}`
    );
  } catch (error) {
    console.error(`MongoDB connection failed. Error: ${error.message}`);
    process.exit(1);
  }
};
