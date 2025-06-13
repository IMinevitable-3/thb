export interface IUser {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface IJwtPayload {
  userId: string;
  email: string;
}
