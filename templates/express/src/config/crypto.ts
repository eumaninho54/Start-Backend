import 'dotenv/config';

export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) ?? 10;
