import { ApiResponse } from '../types/response.interface';
import { RESPONSE_TYPE } from '../enums/enum';

export function formatResponse<T>({
  data = null,
  message = '',
  status = 200,
  success = true,
  showPopUp = false,
  responseType = RESPONSE_TYPE.SUCCESS,
}: {
  data?: T | null;
  message?: string;
  status?: number;
  success?: boolean;
  showPopUp?: boolean;
  responseType?: RESPONSE_TYPE;
}): ApiResponse<T> {
  return {
    success,
    message,
    data,
    showPopUp,
    status,
    responseType,
  };
}
