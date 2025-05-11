import {
  TypedGenericResponse,
  TypedRequest,
  TypedRequestBody,
  TypedRequestQuery,
  TypedResponse,
} from '../types/express.types';
import { getHealthStatus } from '../services/health.service';
import { formatResponse } from '../utils/response.util';
//get request
type HealthStatus = ReturnType<typeof getHealthStatus>;
export const healthCheck = (req: Express.Request, res: TypedGenericResponse<HealthStatus>) => {
  const data = getHealthStatus();
  res.status(200).json(formatResponse({ data }));
};
//get request with query params
export const healthCheckById = (
  req: TypedRequestQuery<{ id: string }>,
  res: TypedResponse<string>
) => {
  const data = req.query.id;
  res.status(200).json(data);
};
//post request with body
export const postHealthCheck = (
  req: TypedRequestBody<{ id: string }>,
  res: TypedResponse<string>
) => {
  const data = req.body.id;
  res.status(200).json(data);
};
//put request with query params and body
export function updateHealthCheckById(
  req: TypedRequest<{ id: string }, { name: string }>,
  res: TypedResponse<{ Success: boolean }>
) {
  console.log(`Updating health check ${req.query.id}`);
  console.log(`setting name to ${req.body.name}`);
  res.status(200).json({ Success: true });
}
