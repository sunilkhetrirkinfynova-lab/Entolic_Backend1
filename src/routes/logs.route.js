import express from "express";
import {
  getLogs,
  createLog,
  deleteLog
} from "../controllers/logsController.js";

const router = express.Router();

router.get("/", getLogs);
router.post("/", createLog);
router.delete("/:id", deleteLog);

export default router;
