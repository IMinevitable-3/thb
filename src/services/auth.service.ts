import User from '../models/user.model';
import { IJwtPayload } from '../types/user.types';
import { generateToken } from '../utils/jwt.util';
import { AppError, ensureError } from '../utils/appError';
export const Userlogin = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError('User not found', 401);
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new AppError('Invalid password', 401);
    }
    const token = generateToken({ userId: user._id.toString(), email: user.email } as IJwtPayload);
    return token;
  } catch (error) {
    throw ensureError(error);
  }
};
export const UserRegister = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new AppError('User already exists', 400);
    }
    const newUser = await User.create({ email, password });
    const token = generateToken({
      userId: newUser._id.toString(),
      email: newUser.email,
    } as IJwtPayload);
    return token;
  } catch (error) {
    throw ensureError(error);
  }
};
