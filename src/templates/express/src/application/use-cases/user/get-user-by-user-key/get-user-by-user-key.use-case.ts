import { User } from '@domain/entities/user.entity';

import { UsersRepository } from '@infra/db/repositories/users.repository';

type GetUserByUserKeyResponse = User;

export class GetUserByUserKeyUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async handle(user: User): Promise<GetUserByUserKeyResponse> {
    return user;
  }
}
