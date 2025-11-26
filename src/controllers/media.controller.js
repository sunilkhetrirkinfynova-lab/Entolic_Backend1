import Media from "../models/media.js";

// CREATE (file upload placeholder)
export const uploadMedia = async (req, res) => {
  try {
    const media = await Media.create(req.body);
    res.status(201).json(media);
  } catch (err) {
    res.status(500).json({ error: "Error uploading media" });
  }
};

// GET ALL
export const getMedia = async (req, res) => {
  try {
    const files = await Media.find().sort({ createdAt: -1 });
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: "Error fetching media" });
  }
};

// UPDATE
export const updateMedia = async (req, res) => {
  try {
    const updated = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Error updating media" });
  }
};

// DELETE
export const deleteMedia = async (req, res) => {
  try {
    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: "Media deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting media" });
  }
};
