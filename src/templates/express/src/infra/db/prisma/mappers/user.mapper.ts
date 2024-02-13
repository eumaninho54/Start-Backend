import { Prisma, User as RawUser } from '@prisma/client';
import { User } from '@domain/entities/user.entity';

export class UserMapper {
  static toDomain(raw: RawUser): User {
    const user = User.create({
      email: raw.email,
      name: raw.name,
      password: raw.password,
      userKey: raw.user_key,
      updatedAt: raw.update_at,
      createdAt: raw.created_at,
    });

    return user;
  }

  static toPersistence(user: User): Prisma.UserCreateInput {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      user_key: user.userKey,
      update_at: user.updateAt,
      created_at: user.createdAt,
    };
  }
}
