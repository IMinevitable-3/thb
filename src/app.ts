import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware';
import { httpLoggerMiddleware } from './middlewares/http-logger.middleware';

// routes
import authRoutes from './routes/auth.route';
import healthRoutes from './routes/health.route';
import userRoutes from './routes/user.route';
dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(httpLoggerMiddleware);

// TODO: Import and use routes here
app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
// Error handling middleware
app.use(errorHandler);
export default app;
