import { AsyncMaybe } from '@core/helpers/Maybe';
import { User } from '@domain/entities/user.entity';
import { UsersRepository } from '@infra/db/repositories/users.repository';
import { UserMapper } from '@infra/db/prisma/mappers/user.mapper';
import { prisma } from '@infra/db/prisma/prismaClient';

export class PrismaUsersRepository implements UsersRepository {
  constructor() {}

  async create(user: User): Promise<User> {
    await prisma.user.create({
      data: UserMapper.toPersistence(user),
    });

    return user;
  }

  async findByCredentials(email: string): AsyncMaybe<User> {
    const user = await prisma.user.findUnique({
      where: {
        email
      },
    });

    if (!user) {
      return null;
    }

    return UserMapper.toDomain(user);
  }

  async findByUserKey(userKey: string): AsyncMaybe<User> {
    const user = await prisma.user.findUnique({
      where: { user_key: userKey },
    });

    if (!user) {
      return null;
    }

    return UserMapper.toDomain(user);
  }
}
