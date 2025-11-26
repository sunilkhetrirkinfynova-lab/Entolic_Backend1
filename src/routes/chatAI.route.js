import express from 'express';
import { query } from '../controllers/chatAI.controller.js';

const router = express.Router();

router.post('/chatbot', query);

export default router;
