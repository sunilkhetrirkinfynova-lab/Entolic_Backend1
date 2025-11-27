import NotificationSetting from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  res.json(await NotificationSetting.find());
};

export const createNotifications = async (req, res) => {
  res.json(await NotificationSetting.create(req.body));
};

export const updateNotifications = async (req, res) => {
  res.json(await NotificationSetting.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const deleteNotifications = async (req, res) => {
  await NotificationSetting.findByIdAndDelete(req.params.id);
  res.json({ message: "Notification config removed" });
};
