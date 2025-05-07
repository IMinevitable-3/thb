import { httpLogger } from '../utils/logger';
import { AppError } from '../utils/appError';

export const getHealthStatus = () => {
  httpLogger.info('Health check requested');
  if (!httpLogger) throw new AppError('Health data not available', 503);
  return {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  };
};
