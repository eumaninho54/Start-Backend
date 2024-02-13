import bcrypt from 'bcrypt';

import { Either, left, right } from '@core/helpers/Either';

import { DifferentPasswordsError } from '@domain/value-objects/password/errors/different-passwords-error';

import { SALT_ROUNDS } from '@config/crypto';

export class Password {
  protected constructor(private readonly password: string) {}

  get value(): string {
    return this.password;
  }

  static async createHash(password: string): Promise<Password> {
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    return new Password(passwordHash);
  }

  static async compareHash(password: string, toCompare: string): Promise<Either<DifferentPasswordsError, Password>> {
    const isSame = await bcrypt.compare(password, toCompare);

    return isSame
      ? right(new Password(password))
      : left(new DifferentPasswordsError(password, toCompare));
  }
}
