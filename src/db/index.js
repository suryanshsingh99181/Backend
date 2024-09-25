import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected!! DB Host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MoongoDB connnection error:", error);
    process.exit(1);
  }
};

export default connectDb;
