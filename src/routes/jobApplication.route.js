// src/routes/jobApplication.route.js
import { Router } from "express";
import {
  getApplications,
  getApplicationById,
  updateApplication
} from "../controllers/jobApplication.controller.js";

const router = Router();

router.get("/", getApplications);
router.get("/:id", getApplicationById);
router.put("/:id", updateApplication);

export default router;
