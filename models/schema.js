import mongoose from "mongoose";
const register_model = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
  },
   date: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("userData1", register_model);
