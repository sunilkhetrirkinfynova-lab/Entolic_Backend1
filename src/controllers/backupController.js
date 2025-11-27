import Backup from "../models/Backup.js";

export const getBackups = async (req, res) => {
  res.json(await Backup.find());
};

export const createBackup = async (req, res) => {
  res.json(await Backup.create(req.body));
};

export const updateBackup = async (req, res) => {
  res.json(await Backup.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const deleteBackup = async (req, res) => {
  await Backup.findByIdAndDelete(req.params.id);
  res.json({ message: "Backup deleted" });
};
