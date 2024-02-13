import { DomainError } from '@core/domain/errors/domain-error';

export class DifferentPasswordsError extends DomainError {
  constructor(firstPassword: string, secondPassword: string) {
    super({
      message: 'Incorrect password',
      logMessage: `The password ${firstPassword} is different from password ${secondPassword}`
    });
  }
}
