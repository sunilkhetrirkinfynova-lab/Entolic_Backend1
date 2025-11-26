// src/controllers/jobApplication.controller.js
import JobApplication from "../models/jobApplication.js";

export const getApplications = async (req, res) => {
  try {
    const apps = await JobApplication.find().populate("jobId");
    res.json({ success: true, data: apps });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const app = await JobApplication.findById(req.params.id).populate("jobId");
    res.json({ success: true, data: app });
  } catch (err) {
    res.status(404).json({ success: false, error: "Application not found" });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const app = await JobApplication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: app });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
