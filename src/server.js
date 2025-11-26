import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import routes from './routes/index.js';
import chatAiRoute from './routes/chatAI.route.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect DB
connectDB();

// Routes
app.use('/api', routes);
app.use('/api', chatAiRoute); // add this line


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
