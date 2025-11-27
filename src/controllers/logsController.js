import Log from "../models/Log.js";

export const getLogs = async (req, res) => {
  res.json(await Log.find().sort({ createdAt: -1 }));
};

export const createLog = async (req, res) => {
  res.json(await Log.create(req.body));
};

export const deleteLog = async (req, res) => {
  await Log.findByIdAndDelete(req.params.id);
  res.json({ message: "Log deleted" });
};
