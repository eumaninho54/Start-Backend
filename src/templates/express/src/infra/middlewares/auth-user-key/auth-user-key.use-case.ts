import { Either, left, right } from '@core/helpers/Either';

import { User } from '@domain/entities/user.entity';

import { UsersRepository } from '@infra/db/repositories/users.repository';
import { UserKeyNotAuth } from '@infra/middlewares/auth-user-key/errors/user-key-not-auth';


type AuthUserKeyResponse = Either<
  UserKeyNotAuth,
  User
>;

export class AuthUserKeyUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async handle(userKey: string): Promise<AuthUserKeyResponse> {
    const user = await this.usersRepository.findByUserKey(userKey);

    if (!user) {
      return left(new UserKeyNotAuth(userKey));
    }

    return right(user);
  }
}
