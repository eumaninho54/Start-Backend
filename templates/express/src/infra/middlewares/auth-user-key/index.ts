import { PrismaUsersRepository } from "@infra/db/prisma/repositories/user/prisma-users-repository";

import { AuthUserKeyController } from "./auth-user-key.controller";
import { AuthUserKeyUseCase } from "./auth-user-key.use-case";


const usersRepository = new PrismaUsersRepository();

const authUserKeyUseCase = new AuthUserKeyUseCase(usersRepository);

const authUserKeyController = new AuthUserKeyController(authUserKeyUseCase);

export { authUserKeyController };
