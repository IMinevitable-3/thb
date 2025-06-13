import User from '../models/user.model';
import { IJwtPayload } from '../types/user.types';
import { generateToken } from '../utils/jwt.util';
import { AppError, ensureError } from '../utils/appError';
export const Userlogin = async (username: string, password: string) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new AppError('User not found', 401);
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new AppError('Invalid password', 401);
    }
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      username: user.username,
    } as IJwtPayload);
    return { token, userId: user._id.toString() };
  } catch (error) {
    throw ensureError(error);
  }
};
export const UserRegister = async (email: string, password: string, username: string) => {
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      throw new AppError(
        existingUser.username === username ? 'Username already exists' : 'Email already exists',
        409
      );
    }
    const newUser = await User.create({ email, password, username });
    const token = generateToken({
      userId: newUser._id.toString(),
      email: newUser.email,
      username: newUser.username,
    } as IJwtPayload);
    return { token, userId: newUser._id.toString() };
  } catch (error) {
    throw ensureError(error);
  }
};
