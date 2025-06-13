export interface IUser {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  username: string;
}

export interface IJwtPayload {
  userId: string;
  email: string;
  username: string;
}
