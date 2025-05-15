# server-response-helper

[![npm version](https://img.shields.io/npm/v/server-response-helper.svg)](https://www.npmjs.com/package/server-response-helper)
[![npm downloads](https://img.shields.io/npm/dm/server-response-helper.svg)](https://www.npmjs.com/package/server-response-helper)
[![License](https://img.shields.io/npm/l/server-response-helper.svg)](LICENSE)

A clean, minimal Express middleware and helper to standardize HTTP server responses with consistent structure and ease of use.

---

## Features

- Middleware to extend `res` with `.response()` method
- Standardizes API responses with status, message, data, timestamp, and path
- Easily customizable response messages for common HTTP status codes
- Fully typed with TypeScript support
- Minimal dependencies, lightweight & fast

---

## Installation

```bash
npm install server-response-helper
````

---

## Usage

### Basic setup (Express)

```ts
import express from 'express';
import responseHelper from 'server-response-helper';

const app = express();

// Use middleware to extend res
app.use(responseHelper());

app.get('/api/login', (req, res) => {
  const user = { id: 1, name: 'Gautam' };
  res.response(200, 'Login successful.', { user }, req.path);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

## API

### Middleware

```ts
responseHelper(): express.RequestHandler
```

Adds `.response()` method to Express `res` object.

### `.response()`

```ts
res.response(
  statusCode: number,
  message?: string | string[],
  data?: object | object[],
  path?: string
): void
```

* `statusCode`: HTTP status code (e.g., 200, 404)
* `message`: Optional. A string or array of strings. Defaults to standard message for the status.
* `data`: Optional. Additional payload to include in response.
* `path`: Optional. The API endpoint path. Defaults to empty string.

Sends JSON response with the structure:

```json
{
  "status": 200,
  "message": "Login successful.",
  "data": { /* any data */ },
  "timestamp": "2025-05-15T12:00:00.000Z",
  "path": "/api/login"
}
```

---

## Contributing

Contributions welcome! Please open issues or submit PRs.

---

## License

MIT © DevRGD
