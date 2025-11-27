import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  action: String,
  user: String,
  details: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Log", LogSchema);
