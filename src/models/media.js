import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    fileName: String,
    fileUrl: String,
    type: String
  },
  { timestamps: true }
);

export default mongoose.model("Media", mediaSchema);
