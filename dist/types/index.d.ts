import type { Response } from 'express';
export interface StandardResponse<T = any> {
    status: number;
    message: string;
    data?: T;
    timestamp: string;
    path?: string;
}
/**
 * Sends a standardized server response using the Express `res` object.
 *
 * @param res - Express response object
 * @param status - HTTP status code
 * @param messageIndex - Optional index to select a specific message variant
 * @param data - Optional data to include in the response
 * @param path - Optional API path for context
 */
export declare function response<T = any>(res: Response, status: number, messageIndex?: number, data?: T, path?: string): void;
