import { DomainError } from '@core/domain/errors/domain-error';

export class UserKeyNotAuth extends DomainError {
  constructor(userKey: string) {
    super({
      message: `No authentication to access.`,
      logMessage: `No access with userKey: ${userKey}`,
      statusCode: 401
    });
  }
}
