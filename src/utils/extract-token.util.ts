import { Request } from 'express';
import { AppError } from './appError';

export const extractToken = (req: Request) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new AppError('No token provided', 401);
  }
  return token;
};
