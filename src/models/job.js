// src/models/job.js
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, default: "Remote" },
    description: { type: String },
    status: { type: String, default: "open" }, // open, closed
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
