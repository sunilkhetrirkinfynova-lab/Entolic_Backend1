// src/routes/job.route.js
import { Router } from "express";
import { createJob, getJobs, updateJob, deleteJob } from "../controllers/job.controller.js";

const router = Router();

router.get("/", getJobs);
router.post("/", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;
