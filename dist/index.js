import { statusMessages } from './messages.js';
/**
 * Sends a standardized server response using the Express `res` object.
 *
 * @param res - Express response object
 * @param status - HTTP status code
 * @param messageIndex - Optional index to select a specific message variant
 * @param data - Optional data to include in the response
 * @param path - Optional API path for context
 */
export function response(res, status, messageIndex = 0, data, path) {
    const messages = statusMessages[status] || ['Unknown status'];
    const message = messages[messageIndex] || messages[0];
    const responsePayload = {
        status,
        message,
        timestamp: new Date().toISOString(),
    };
    if (data !== undefined) {
        responsePayload.data = data;
    }
    if (path) {
        responsePayload.path = path;
    }
    res.status(status).json(responsePayload);
}
//# sourceMappingURL=index.js.map