import express from "express";
import {
  getSettings,
  createSettings,
  updateSettings,
  deleteSettings
}  from "../controllers/settingsController.js";

const router = express.Router();

router.get("/", getSettings);
router.post("/", createSettings);
router.put("/:id", updateSettings);
router.delete("/:id", deleteSettings);

export default router;
