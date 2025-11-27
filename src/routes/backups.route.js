import express from "express";
import {
  getBackups,
  createBackup,
  updateBackup,
  deleteBackup
} from "../controllers/backupController.js";

const router = express.Router();

router.get("/", getBackups);
router.post("/", createBackup);
router.put("/:id", updateBackup);
router.delete("/:id", deleteBackup);

export default router;
