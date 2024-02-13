import 'express-async-errors';
import pino from 'pino-http';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import { routes } from '@routes/index';
import { DomainError } from '@core/domain/errors/domain-error';

const app = express();

app.use(express.json());
app.use(pino);
app.use(cors());
app.use(routes);

// Error Handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof DomainError) {
    req.log.error(err.logMessage);

    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  next();
});

app.listen(3333);
