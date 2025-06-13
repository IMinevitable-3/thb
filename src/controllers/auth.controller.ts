import { TypedRequestBody, TypedResponse } from '../types/express.types';
import { Userlogin, UserRegister } from '../services/auth.service';
import { formatResponse } from '../utils/response.util';
import { RESPONSE_TYPE } from '../enums/enum';
import { ApiResponse } from '../types/response.interface';
import { ensureError } from '../utils/appError';
// request types
import {
  ILoginRequest,
  IRegisterRequest,
  ILoginResponse,
  IRegisterResponse,
} from '../types/common/auth.request.types';

export const login = async (
  req: TypedRequestBody<ILoginRequest>,
  res: TypedResponse<ApiResponse<ILoginResponse>>
) => {
  try {
    const { username, password } = req.body;
    const token = await Userlogin(username, password);
    res.status(200).json(
      formatResponse({
        data: { token: token.token, userId: token.userId },
        message: 'Login successful',
        responseType: RESPONSE_TYPE.SUCCESS,
      })
    );
  } catch (error) {
    throw ensureError(error);
  }
};

export const register = async (
  req: TypedRequestBody<IRegisterRequest>,
  res: TypedResponse<ApiResponse<IRegisterResponse>>
) => {
  try {
    const { email, password, username } = req.body;
    const token = await UserRegister(email, password, username);
    res.status(200).json(
      formatResponse({
        data: { token: token.token, userId: token.userId },
        message: 'Register successful',
        responseType: RESPONSE_TYPE.SUCCESS,
      })
    );
  } catch (error) {
    throw ensureError(error);
  }
};
