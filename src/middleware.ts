import type { Request, Response, NextFunction } from 'express';
import { response } from './index.js';

declare global {
  namespace Express {
    interface Response {
      /**
       * Sends a standardized server response.
       * @param status - HTTP status code
       * @param messageIndex - Optional message variant index (default 0)
       * @param data - Optional response data
       * @param path - Optional API endpoint path
       */
      response<T = any>(
        status: number,
        messageIndex?: number,
        data?: T,
        path?: string
      ): void;
    }
  }
}

/**
 * Middleware to add the `response` helper method to the Express Response object.
 *
 * Usage:
 * ```ts
 * app.use(responseHelper());
 * ...
 * res.response(200, 0, { user: { id: 1 } }, '/api/login');
 * ```
 */
export function responseHelper() {
  return (req: Request, res: Response, next: NextFunction) => {
    res.response = function <T = any>(
      status: number,
      messageIndex = 0,
      data?: T,
      path?: string
    ): void {
      response<T>(this, status, messageIndex, data, path);
    };
    next();
  };
}
