import { DomainError } from '@core/domain/errors/domain-error';

export class UserByEmailNotFoundError extends DomainError {
  constructor(email: string) {
    super({
      message: `User with email '${email}' was not found.`,
      statusCode: 400
    });
  }
}
