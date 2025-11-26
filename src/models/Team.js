import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    shortInfo: { type: String, default: "" },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    photoUrl: { type: String, default: "" },
    priority: { type: Number, default: 0 }
}, { timestamps: true });

const Team = mongoose.model("Team", TeamSchema);

export default Team;
