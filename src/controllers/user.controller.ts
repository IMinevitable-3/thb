import { TypedResponse } from '../types/express.types';
import { formatResponse } from '../utils/response.util';
import { IUserDetailsResponse } from '../types/common/user.request.types';
import { ensureError } from '../utils/appError';
import { ApiResponse } from '../types/response.interface';
import { RESPONSE_TYPE } from '../enums/enum';
import { Request } from 'express';
import { getAllUsers, getUserDetails } from '../services/user.service';
import { decodeToken } from '../utils/jwt.util';
import { extractToken } from '../utils/extract-token.util';
export const getUserDetailsController = async (
  req: Request,
  res: TypedResponse<ApiResponse<IUserDetailsResponse>>
) => {
  try {
    const token = extractToken(req);
    const decodedToken = decodeToken(token);
    const data = await getUserDetails(decodedToken.userId);
    res.status(200).json(
      formatResponse({
        data,
        message: 'User details fetched successfully',
        responseType: RESPONSE_TYPE.SUCCESS,
      })
    );
  } catch (error) {
    throw ensureError(error);
  }
};

export const getAllUsersController = async (
  req: Request,
  res: TypedResponse<ApiResponse<IUserDetailsResponse[]>>
) => {
  const data = await getAllUsers();
  res.status(200).json(
    formatResponse({
      data,
      message: 'Users fetched successfully',
      responseType: RESPONSE_TYPE.SUCCESS,
    })
  );
};
