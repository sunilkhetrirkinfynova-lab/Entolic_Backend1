import express from "express";
import { getSeo, createSeo, updateSeo, deleteSeo } from "../controllers/seo.controller.js";

const router = express.Router();

// GET all SEO
router.get("/", getSeo);

// POST new SEO
router.post("/", createSeo);

// UPDATE SEO (upsert)
router.put("/", updateSeo);

// DELETE SEO by ID
router.delete("/:id", deleteSeo);

export default router;
