import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';
import { RESPONSE_TYPE } from '../enums/enum';
export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const isOperational = err instanceof AppError ? err.isOperational : false;

  // httpLogger.error('Unhandled Error', {
  //   error: {
  //     name: err.name,
  //     message: err.message,
  //     stack: err.stack,
  //   },
  //   statusCode,
  //   isOperational,
  //   route: req.originalUrl,
  //   method: req.method,
  // });

  if (res.headersSent) return next(err);

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    showPopUp: true,
    message: isOperational ? err.message : 'Something went wrong. Please try again later.',
    responseType: RESPONSE_TYPE.ERROR,
    data: null,
  });
};
