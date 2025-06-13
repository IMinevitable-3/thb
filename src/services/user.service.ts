import User from '../models/user.model';
import { AppError } from '../utils/appError';
export const getUserDetails = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return {
    id: user._id.toString(),
    email: user.email,
    username: user.username,
  };
};
export const getAllUsers = async () => {
  const users = await User.find();
  return users.map((user) => ({
    id: user._id.toString(),
    email: user.email,
    username: user.username,
  }));
};

export const getUserById = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return user;
};
