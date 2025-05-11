import { Router } from 'express';
import {
  healthCheck,
  healthCheckById,
  postHealthCheck,
  updateHealthCheckById,
} from '../controllers/health.controller';

const router = Router();

router.get('/health', healthCheck);
router.get('/health/:id', healthCheckById);
router.post('/health', postHealthCheck);
router.put('/update-health/:id', updateHealthCheckById);
export default router;
