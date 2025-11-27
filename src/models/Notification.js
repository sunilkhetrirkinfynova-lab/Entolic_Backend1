import mongoose from "mongoose";

const notificationSettingSchema = new mongoose.Schema({
  emailAlerts: Boolean,
  smsAlerts: Boolean,
  triggers: [String]
}, { timestamps: true });

export default mongoose.model("NotificationSetting", notificationSettingSchema);
