import 'express-async-errors';
import cors from 'cors';
import express, { Request, Response } from 'express';
import pino from 'pino-http';

import { PORT } from "@config/app"

import { DomainError } from '@core/domain/errors/domain-error';

import { routes } from '@routes/index';

const app = express();

app.use(express.json());
app.use(pino({ autoLogging: false }));
app.use(cors());
app.use(routes);

// Error Handling
app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof DomainError) {
    req.log.error(err.logMessage);

    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  req.log.error('Internal Error');

  return res.status(500).json({
    message: "Internal Error"
  })
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log("Running"));
