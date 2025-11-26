const Chat = require('../models/chatAI');
const fetch = global.fetch || require('node-fetch');

const provider = process.env.CHATBOT_PROVIDER || 'local';
const OPENAI_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

function localReply(text) {
    const t = text.toLowerCase();
    if (t.includes('hello') || t.includes('hi')) return 'Hello — how can I help you today?';
    if (t.includes('price') || t.includes('cost')) return 'For pricing details please tell me which product or service you mean.';
    if (t.includes('support') || t.includes('error') || t.includes('bug')) return 'Please describe the issue and I will try to help or escalate.';
    return `You said: "${text}". Can you share a bit more detail?`;
}

async function openAiReply(messages) {
    if (!OPENAI_KEY) throw new Error('OPENAI_API_KEY not set');
    const payload = {
        model: OPENAI_MODEL,
        messages: messages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text })),
        max_tokens: 500
    };
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${OPENAI_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`OpenAI error ${res.status}`);
    const data = await res.json();
    return data?.choices?.[0]?.message?.content || null;
}

exports.query = async (req, res) => {
    try {
        const { message, sessionId } = req.body || {};
        if (!message || typeof message !== 'string' || !message.trim()) {
            return res.status(400).json({ error: 'message is required' });
        }

        // find or create session
        let session = sessionId ? await Chat.findOne({ sessionId }) : null;
        if (!session) {
            const id = `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
            session = new Chat({ sessionId: id });
        }

        // add user message
        session.messages.push({ role: 'user', text: message.trim() });

        // generate reply
        let reply;
        try {
            if (provider === 'openai' && OPENAI_KEY) {
                reply = await openAiReply(session.messages);
                if (!reply) reply = localReply(message);
            } else {
                reply = localReply(message);
            }
        } catch {
            reply = localReply(message);
        }

        // save assistant reply and persist
        session.messages.push({ role: 'assistant', text: reply });
        await session.save();

        return res.json({ sessionId: session.sessionId, reply });
    } catch (err) {
        console.error('Chatbot error:', err.message || err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};