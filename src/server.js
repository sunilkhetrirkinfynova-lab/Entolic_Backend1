import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import routes from './routes/index.js';
import chatAiRoute from './routes/chatAI.route.js';
import teamRoutes from "./routes/team.route.js";
import jobRoutes from "./routes/job.route.js";
import jobAppRoutes from "./routes/jobApplication.route.js";
import blogRoutes from "./controllers/blog.route.js";
import mediaRoutes from "./routes/media.route.js";
import leadRoutes from "./routes/lead.route.js";

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
app.use("/api/admin", teamRoutes);
app.use("/api/admin/jobs", jobRoutes);
app.use("/api/admin/job-applications", jobAppRoutes);
app.use("/api/admin/blogs", blogRoutes);
app.use("/api/admin/media", mediaRoutes);
app.use("/api/admin/leads", leadRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
