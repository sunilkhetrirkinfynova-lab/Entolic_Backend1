import express from "express";
import { createBanner, getBanners, updateBanner, deleteBanner } 
from "../controllers/banner.controller.js";

const router = express.Router();

router.post("/", createBanner);
router.get("/", getBanners);
router.put("/:id", updateBanner);
router.delete("/:id", deleteBanner);

export default router;
