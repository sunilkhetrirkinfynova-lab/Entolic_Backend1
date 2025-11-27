import mongoose from "mongoose";

const backupSchema = new mongoose.Schema({
  fileName: String,
  backupDate: { type: Date, default: Date.now },
  size: Number
}, { timestamps: true });

export default mongoose.model("Backup", backupSchema);
