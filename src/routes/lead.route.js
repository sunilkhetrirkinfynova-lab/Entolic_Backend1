import express from "express";
import {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead
} from "../controllers/lead.controller.js";

const router = express.Router();

// PUBLIC form
router.post("/contact", createLead);

// ADMIN
router.get("/", getLeads);
router.get("/:id", getLeadById);
router.put("/:id", updateLead);
router.delete("/:id", deleteLead);

export default router;
