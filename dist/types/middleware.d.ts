import type { Request, Response, NextFunction } from 'express';
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
            response<T = any>(status: number, messageIndex?: number, data?: T, path?: string): void;
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
export declare function responseHelper(): (req: Request, res: Response, next: NextFunction) => void;
