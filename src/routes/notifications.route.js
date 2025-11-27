import express from "express";
import {
  getNotifications,
  createNotifications,
  updateNotifications,
  deleteNotifications
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", getNotifications);
router.post("/", createNotifications);
router.put("/:id", updateNotifications);
router.delete("/:id", deleteNotifications);

export default router;
