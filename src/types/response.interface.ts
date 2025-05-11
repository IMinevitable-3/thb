import { RESPONSE_TYPE } from '../enums/enum';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  showPopUp: boolean;
  status: number;
  responseType: RESPONSE_TYPE;
}
