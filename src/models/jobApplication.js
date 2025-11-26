// src/models/jobApplication.js
import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    applicantName: { type: String, required: true },
    email: { type: String, required: true },
    resumeUrl: { type: String },
    status: { type: String, default: "pending" }, // pending, reviewed, rejected, hired
    notes: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("JobApplication", JobApplicationSchema);
