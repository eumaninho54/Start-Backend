import { DomainError } from '@core/domain/errors/domain-error';

export class EmailBadFormattedError extends DomainError {
  constructor(email: string) {
    super({
      message: `The email '${email}' is bad formatted.`
    });
  }
}
