import { PrismaUsersRepository } from '@infra/db/prisma/repositories/user/prisma-users-repository';
import { GetUserByUserKeyController } from './get-user-by-user-key.controller';
import { GetUserByUserKeyUseCase } from './get-user-by-user-key.use-case';

const usersRepository = new PrismaUsersRepository();

const getUserByUserKeyUseCase = new GetUserByUserKeyUseCase(
  usersRepository,
);

const getUserByUserKeyController = new GetUserByUserKeyController(
  getUserByUserKeyUseCase,
);

export { getUserByUserKeyController };
