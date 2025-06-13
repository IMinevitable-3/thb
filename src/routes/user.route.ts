import { Router } from 'express';
import { authenticated } from '../middlewares/authenticated.middleware';
import { getUserDetailsController, getAllUsersController } from '../controllers/user.controller';
const userRouter = Router();

userRouter.get('/', authenticated, getUserDetailsController);
userRouter.get('/all', authenticated, getAllUsersController);

export default userRouter;
