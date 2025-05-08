import { Request, Response, NextFunction } from 'express';
import { formatHTTPLoggerResponse, httpLogger } from '../utils/logger';
import { environment } from '../environment';

/**
 * Middleware that logs each incoming HTTP request and corresponding response
 * after the response is sent.
 */
export const httpLoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;

    const logPayload =
      environment.nodeEnv === 'development'
        ? { path: req.path, elapsedTimeInMs, statusCode: res.statusCode }
        : formatHTTPLoggerResponse(req, res);
    httpLogger.info('HTTP Request Log', {
      ...logPayload,
      durationMs: elapsedTimeInMs.toFixed(3),
    });
  });

  next();
};
