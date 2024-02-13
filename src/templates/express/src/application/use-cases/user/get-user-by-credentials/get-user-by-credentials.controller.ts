import { Request, Response } from 'express';
import { GetUserByCredentialsUseCase } from './get-user-by-credentials.use-case';
import { DomainError } from '@core/domain/errors/domain-error';

export class GetUserByCredentialsController {
  constructor(
    private getUserByCredentialsUseCase: GetUserByCredentialsUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new DomainError({
        message: 'Empty parameter values',
      });
    }

    const result = await this.getUserByCredentialsUseCase.handle(
      email,
      password,
    );

    if (result.isLeft()) {
      throw new DomainError(result.value);
    }

    return res.status(201).json(result.value);
  }
}
