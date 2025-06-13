import { RequestHandler } from 'express';
import { RESPONSE_TYPE } from '../enums/enum';
import { formatResponse } from '../utils/response.util';
import { extractToken } from '../utils/extract-token.util';
export const authenticated: RequestHandler = async (req, res, next) => {
  const token = extractToken(req);

  if (!token) {
    res.status(401).json(
      formatResponse({
        message: 'Unauthorized',
        responseType: RESPONSE_TYPE.ERROR,
      })
    );
    return;
  }

  next();
};
