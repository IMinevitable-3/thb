export interface ILoginRequest {
  username: string;
  password: string;
}

export interface IRegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface ILoginResponse {
  token: string;
  userId: string;
}

export interface IRegisterResponse {
  token: string;
  userId: string;
}
