import { Router } from 'express';
import { authUserKeyController } from '@infra/middlewares/auth-user-key';
import { getUserByCredentialsController } from '@application/use-cases/user/get-user-by-credentials';
import { getUserByUserKeyController } from '@application/use-cases/user/get-user-by-user-key';

export const userRoutes = Router();

userRoutes.get(
  '/',
  (res, req, next) => authUserKeyController.handle(res, req, next),
  (res, req) => getUserByUserKeyController.handle(res, req)
)

userRoutes.get(
  '/login',
  (res, req) => getUserByCredentialsController.handle(res, req)
);
