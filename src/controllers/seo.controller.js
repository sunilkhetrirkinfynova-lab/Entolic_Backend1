import SEO from "../models/seo.js";

// GET all SEO settings
export const getSeo = async (req, res) => {
  try {
    const seoData = await SEO.find();
    res.json(seoData);
  } catch (err) {
    res.status(500).json({ error: "Error fetching SEO settings" });
  }
};

// POST - Create a new SEO record
export const createSeo = async (req, res) => {
  try {
    const seo = await SEO.create(req.body);
    res.json(seo);
  } catch (err) {
    res.status(500).json({ error: "Error creating SEO" });
  }
};

// PUT - Update or create SEO for a page
export const updateSeo = async (req, res) => {
  try {
    const updated = await SEO.findOneAndUpdate(
      { page: req.body.page },
      req.body,
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Error updating SEO" });
  }
};

// DELETE - Remove SEO by ID
export const deleteSeo = async (req, res) => {
  try {
    await SEO.findByIdAndDelete(req.params.id);
    res.json({ message: "SEO entry deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting SEO" });
  }
};
