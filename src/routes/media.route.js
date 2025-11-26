import express from "express";
import { uploadMedia, getMedia, updateMedia, deleteMedia } from "../controllers/media.controller.js";

const router = express.Router();

router.get("/", getMedia);
router.post("/", uploadMedia);
router.put("/:id", updateMedia);
router.delete("/:id", deleteMedia);

export default router;
