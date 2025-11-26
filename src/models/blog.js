import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: String,
    coverImage: String,
    status: { type: String, default: "published" }
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
