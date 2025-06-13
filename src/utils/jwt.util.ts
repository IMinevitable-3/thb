import jwt from 'jsonwebtoken';
import { environment } from '../environment';
import { IJwtPayload } from '../types/user.types';

export const generateToken = (payload: IJwtPayload) => {
  return jwt.sign(payload, environment.jwtSecret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, environment.jwtSecret);
};
