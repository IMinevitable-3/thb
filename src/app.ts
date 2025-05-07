import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import healthRoutes from './routes/health.route';
import { errorHandler } from './middlewares/error.middleware';
import { httpLoggerMiddleware } from './middlewares/http-logger.middleware';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(httpLoggerMiddleware);

// TODO: Import and use routes here
app.use('/api', healthRoutes);

// Error handling middleware
app.use(errorHandler);
export default app;
