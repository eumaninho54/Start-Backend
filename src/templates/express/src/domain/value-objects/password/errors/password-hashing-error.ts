import { DomainError } from '@core/domain/errors/domain-error';

export class PasswordHashingError extends DomainError {
  constructor(password: string) {
    super({
      message: 'Internal error when creating password',
      logMessage: `Error creating password hash ${password}`,
      statusCode: 500
    });
  }
}
