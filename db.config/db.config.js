import mongoose from "mongoose";
export default async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE_URL);
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
};
