import mongoose from "mongoose";

const systemSettingSchema = new mongoose.Schema({
  brandName: String,
  logoUrl: String,
  smtpHost: String,
  smtpUser: String,
  smtpPass: String,
  apiKey: String
}, { timestamps: true });

export default mongoose.model("SystemSetting", systemSettingSchema);
