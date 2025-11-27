import SystemSetting from "../models/Settings.js";

export const getSettings = async (req, res) => {
  const data = await SystemSetting.find();
  res.json(data);
};

export const createSettings = async (req, res) => {
  const created = await SystemSetting.create(req.body);
  res.json(created);
};

export const updateSettings = async (req, res) => {
  const updated = await SystemSetting.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteSettings = async (req, res) => {
  await SystemSetting.findByIdAndDelete(req.params.id);
  res.json({ message: "Settings removed" });
};
