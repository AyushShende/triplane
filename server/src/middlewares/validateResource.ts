import { StatusCodes } from 'http-status-codes';
import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      next(new AppError(error.errors[0].message, StatusCodes.BAD_REQUEST));
    }
  };

export default validate;
