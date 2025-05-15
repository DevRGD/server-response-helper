import { response } from './index.js';
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
    return (req, res, next) => {
        res.response = function (status, messageIndex = 0, data, path) {
            response(this, status, messageIndex, data, path);
        };
        next();
    };
}
//# sourceMappingURL=middleware.js.map