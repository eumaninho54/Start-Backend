import { PrismaUsersRepository } from "@infra/db/prisma/repositories/user/prisma-users-repository";

import { GetUserByCredentialsController } from "./get-user-by-credentials.controller";
import { GetUserByCredentialsUseCase } from "./get-user-by-credentials.use-case";


const usersRepository = new PrismaUsersRepository();

const getUserByCredentialsUseCase = new GetUserByCredentialsUseCase(usersRepository);

const getUserByCredentialsController = new GetUserByCredentialsController(getUserByCredentialsUseCase);

export { getUserByCredentialsController };
