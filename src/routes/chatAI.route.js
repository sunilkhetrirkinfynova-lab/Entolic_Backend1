const express = require('express');
const router = express.Router();
const controller = require('../controllers/chatAI.controller');

// POST /api/chatbot/query
router.post('/chatbot', controller.query);

module.exports = router;