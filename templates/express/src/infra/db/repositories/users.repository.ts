import { AsyncMaybe } from '@core/helpers/Maybe';

import { User } from '@domain/entities/user.entity';

export abstract class UsersRepository {
  abstract create(user: User): Promise<User>;
  abstract findByCredentials(email: string, password: string): AsyncMaybe<User>;
  abstract findByUserKey(userKey: string): AsyncMaybe<User>;
}
