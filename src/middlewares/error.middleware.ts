import { Request, Response } from 'express';
import { AppError } from '../utils/appError';
import { httpLogger } from '../utils/logger';

export const errorHandler = (err: Error | AppError, req: Request, res: Response) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const isOperational = err instanceof AppError ? err.isOperational : false;

  // Log the error details
  httpLogger.error('Unhandled Error', {
    error: {
      name: err.name,
      message: err.message,
      stack: err.stack,
    },
    statusCode,
    isOperational,
    route: req.originalUrl,
    method: req.method,
    clientIp: req.headers['x-forwarded-for'] ?? req.socket.remoteAddress,
  });

  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
};
