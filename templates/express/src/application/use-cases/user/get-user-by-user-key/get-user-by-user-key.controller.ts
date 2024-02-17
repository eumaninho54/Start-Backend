import { Request, Response } from 'express';

import { User } from '@domain/entities/user.entity';

import { GetUserByUserKeyUseCase } from './get-user-by-user-key.use-case';

export class GetUserByUserKeyController {
  constructor(
    private getUserByUserKeyUseCase: GetUserByUserKeyUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { user } = req.params;

    const userFormatted = User.create(JSON.parse(user));

    const result = await this.getUserByUserKeyUseCase.handle(userFormatted);

    return res.status(201).json(result);
  }
}
