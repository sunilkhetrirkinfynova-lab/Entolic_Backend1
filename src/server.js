const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api', routes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});