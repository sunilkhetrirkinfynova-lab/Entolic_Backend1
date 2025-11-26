import Chat from '../models/chatAI.js';
import axios from 'axios';

const provider = process.env.CHATBOT_PROVIDER || 'local';
const OPENAI_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

function localReply(text) {
    const t = text.toLowerCase();
    if (t.includes('hello') || t.includes('hi')) return 'Hello — how can I help you today?';
    if (t.includes('price') || t.includes('cost')) return 'For pricing details, please specify the product.';
    if (t.includes('support') || t.includes('error') || t.includes('bug')) return 'Please describe the issue, I will help.';
    return `You said: "${text}". Can you share more details?`;
}

async function openAiReply(messages) {
    if (!OPENAI_KEY) throw new Error("OPENAI_API_KEY not set");

    const payload = {
        model: OPENAI_MODEL,
        messages: messages.map(m => ({
            role: m.role,
            content: m.text
        })),
        max_tokens: 500
    };

    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        payload,
        {
            headers: {
                Authorization: `Bearer ${OPENAI_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    return response.data?.choices?.[0]?.message?.content || null;
}

export const query = async (req, res) => {
    try {
        const { message, sessionId } = req.body || {};

        if (!message || !message.trim()) {
            return res.status(400).json({ error: "message is required" });
        }

        let session = sessionId ? await Chat.findOne({ sessionId }) : null;

        if (!session) {
            const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
            session = new Chat({ sessionId: id });
        }

        session.messages.push({ role: "user", text: message.trim() });

        let reply;
        try {
            if (provider === "openai" && OPENAI_KEY) {
                reply = await openAiReply(session.messages);
                if (!reply) reply = localReply(message);
            } else {
                reply = localReply(message);
            }
        } catch {
            reply = localReply(message);
        }

        session.messages.push({ role: "assistant", text: reply });
        await session.save();

        return res.json({ sessionId: session.sessionId, reply });

    } catch (err) {
        console.error("Chat error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
};
