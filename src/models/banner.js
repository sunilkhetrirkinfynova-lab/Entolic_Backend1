import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    ctaLabel: String,
    ctaLink: String,
    backgroundImage: String,
    order: Number,
    status: { type: String, default: "active" }
  },
  { timestamps: true }
);

export default mongoose.model("Banner", bannerSchema);
