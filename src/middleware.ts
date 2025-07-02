import type { Request, Response, NextFunction } from 'express';
import { response } from './index.js';

declare global {
  namespace Express {
    interface Response {
      response<T = any>(
        status: number,
        messageOrIndex?: string | number,
        data?: T,
        path?: string
      ): void;
    }
  }
}

export function responseHelper() {
  return (req: Request, res: Response, next: NextFunction) => {
    res.response = function <T = any>(
      status: number,
      messageOrIndex: string | number = 0,
      data?: T,
      path?: string
    ): void {
      response<T>(this, status, messageOrIndex, data, path || req.path);
    };
    next();
  };
}
