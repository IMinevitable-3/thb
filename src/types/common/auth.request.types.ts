export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IRegisterResponse {
  token: string;
}
