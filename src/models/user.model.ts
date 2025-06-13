import { Model, Schema, model } from 'mongoose';
import { IUser } from '../types/user.types';
import bcrypt from 'bcrypt';
interface IUserMethods {
  comparePassword(password: string): Promise<boolean>;
}

type UserModel = Model<IUser, object, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//save password as hash
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User = model<IUser, UserModel>('User', userSchema);

export default User;
