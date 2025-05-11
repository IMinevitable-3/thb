import { Request, Response } from 'express';
import { Query, Send } from 'express-serve-static-core';
import { ApiResponse } from '../types/response.interface';
export interface TypedRequestBody<T> extends Request {
  body: T;
}

export interface TypedRequestQuery<T extends Query> extends Request {
  query: T;
}

export interface TypedRequest<T extends Query, U> extends Request {
  body: U;
  query: T;
}

export interface TypedResponse<ResBody> extends Response {
  json: Send<ResBody, this>;
}
export interface TypedGenericResponse<ResBody> extends Response {
  json: Send<ApiResponse<ResBody>, this>;
}

//reference: https://javascript.plainenglish.io/typed-express-request-and-response-with-typescript-7277aea028c
