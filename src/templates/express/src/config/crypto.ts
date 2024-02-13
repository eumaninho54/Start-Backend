import 'dotenv/config';

export const SALT_ROUNDS = process.env.SALT_ROUNDS ?? 10;
