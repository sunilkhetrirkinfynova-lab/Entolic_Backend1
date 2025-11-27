import mongoose from "mongoose";

const SEOSchema = new mongoose.Schema({
  page: String,
  metaTitle: String,
  metaDescription: String,
  ogImage: String
}, { timestamps: true });

export default mongoose.model("SEO", SEOSchema);
