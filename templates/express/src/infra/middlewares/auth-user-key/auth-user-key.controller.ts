import { NextFunction, Request, Response } from 'express';
import { AuthUserKeyUseCase } from './auth-user-key.use-case';
import { DomainError } from '@core/domain/errors/domain-error';

export class AuthUserKeyController {
  constructor(private authUserKeyUseCase: AuthUserKeyUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    const userKey = req.header('user-key');

    if (!userKey) {
      throw new DomainError({ message: 'Empty user-key' });
    }

    const result = await this.authUserKeyUseCase.handle(userKey);

    if (result.isLeft()) {
      throw new DomainError({
        message: result.value.message,
        logMessage: result.value.logMessage,
        statusCode: result.value.statusCode
      });
    }

    req.params.user = JSON.stringify(result.value);
    next();
  }
}
