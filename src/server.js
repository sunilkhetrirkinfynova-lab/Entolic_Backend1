const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes');
const chatAiRoute = require('./routes/chatAI.route'); // add this line


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
