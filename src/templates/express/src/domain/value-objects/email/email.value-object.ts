import { Either, left, right } from '@core/helpers/Either';

import { EmailBadFormattedError } from '@domain/value-objects/email/errors/email-bad-formatted-error';

export class Email {
  protected constructor(private readonly email: string) {}

  get value(): string {
    return this.email;
  }

  static validate(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  }

  static create(email: string): Either<EmailBadFormattedError, Email> {
    const isValidEmail = this.validate(email);

    if (!isValidEmail) {
      return left(new EmailBadFormattedError(email));
    }

    return right(new Email(email));
  }
}
