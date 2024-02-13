import { Either, left, right } from '@core/helpers/Either';

import { User } from '@domain/entities/user.entity';
import { Email } from '@domain/value-objects/email/email.value-object';
import { Password } from '@domain/value-objects/password/password.value-object';
import { EmailBadFormattedError } from '@domain/value-objects/email/errors/email-bad-formatted-error';
import { PasswordHashingError } from '@domain/value-objects/password/errors/password-hashing-error';

import { UserByEmailNotFoundError } from '@application/use-cases/user/errors/user-by-email-not-found.error';

import { UsersRepository } from '@infra/db/repositories/users.repository';

type GetUserByCredentialsResponse = Either<
  EmailBadFormattedError | UserByEmailNotFoundError,
  User
>;

export class GetUserByCredentialsUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async handle(
    email: string,
    password: string,
  ): Promise<GetUserByCredentialsResponse> {
    const isInvalidEmail = !Email.validate(email);

    if (isInvalidEmail) {
      return left(new EmailBadFormattedError(email));
    }

    const user = await this.usersRepository.findByCredentials(email, password);

    if (!user) {
      return left(new UserByEmailNotFoundError(email));
    }

    const isValidPassword = await Password.compareHash(password, user.password);

    if(!isValidPassword){
      return left(new PasswordHashingError(password));
    }

    return right(user);
  }
}
