import winston from 'winston';
import { Request, Response } from 'express';
const { combine, timestamp, printf } = winston.format;
import { randomBytes } from 'crypto';
import { environment } from '../environment';
const appVersion = process.env.npm_package_version;
const generateLogId = (): string => randomBytes(16).toString('hex');
const timestampFormat = 'MMM-DD-YYYY HH:mm:ss';
const LogIndentation = 2;

const formatHTTPLoggerResponse = (req: Request, res: Response) => {
  return {
    request: {
      headers: req.headers,
      host: req.headers.host,
      baseUrl: req.baseUrl,
      url: req.url,
      method: req.method,
      body: req.body,
      params: req?.params,
      query: req?.query,
    },
    response: {
      headers: res.getHeaders(),
      statusCode: res.statusCode,
    },
  };
};

// Logger for API endpoints
const httpLogger = winston.createLogger({
  format: combine(
    timestamp({ format: timestampFormat }),
    printf(({ timestamp, level, message, ...data }) => {
      if (environment.nodeEnv === 'development') {
        return message
          ? `${timestamp} : ${message}`
          : `${timestamp} : Path: ${data.path}, Status: ${data.statusCode}, Duration: ${data.durationMs}ms`;
      }

      const response = {
        level,
        logId: generateLogId(),
        timestamp,
        appInfo: {
          appVersion,
          environment: process.env.NODE_ENV,
          proccessId: process.pid,
        },
        message,
        data,
      };

      return JSON.stringify(response, null, LogIndentation);
    })
  ),
  transports: [
    ...(environment.nodeEnv === 'development'
      ? [new winston.transports.Console()]
      : [
          new winston.transports.File({
            filename: 'logs/application-logs.log',
          }),
        ]),
  ],
});
export { formatHTTPLoggerResponse, httpLogger };
