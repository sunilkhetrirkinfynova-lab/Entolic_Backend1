const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    role: { type: String, enum: ['user','assistant'], required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const ChatSchema = new mongoose.Schema({
    sessionId: { type: String, required: true, unique: true },
    messages: { type: [MessageSchema], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Chat', ChatSchema);