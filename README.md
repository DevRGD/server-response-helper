# Server Response Helper

<p align="left">
  <strong>
    An elegant Express middleware that provides a <code>.response()</code> helper to create consistent, standardized JSON responses across your API. Features include custom messages, TypeScript support, and zero dependencies.
  </strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/server-response-helper" target="_blank">
    <img src="https://img.shields.io/npm/v/server-response-helper?style=for-the-badge&logo=npm&logoColor=white&color=indigo" alt="NPM Version">
  </a>
  <a href="https://www.npmjs.com/package/server-response-helper" target="_blank">
    <img src="https://img.shields.io/npm/dm/server-response-helper?style=for-the-badge&logo=npm&logoColor=white&color=teal" alt="NPM Downloads">
  </a>
  <a href="https://github.com/DevRGD/server-response-helper/actions" target="_blank">
    <img src="https://img.shields.io/github/actions/workflow/status/DevRGD/server-response-helper/main.yml?branch=main&style=for-the-badge&logo=github&logoColor=white&color=indigo" alt="Build Status">
  </a>
  <a href="LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/server-response-helper?style=for-the-badge&logo=files&logoColor=white&color=teal" alt="License">
  </a>
</p>

---

## 🤔 Why `server-response-helper`?

In modern API development, **consistency is key**. Clients consuming your API expect a predictable response structure. This tiny helper enforces a **standard JSON response format** across all your endpoints, making your API more robust and easier to work with.

- ✅ **Standardize Responses**: Uniform structure (`status`, `message`, `data`, `timestamp`, `path`)
- 🚀 **Lightweight & Fast**: Zero dependencies, minimal overhead
- ✨ **Easy to Use**: Plug-and-play setup
- 🔒 **Fully Typed**: Built in TypeScript for safety and autocompletion

---

## 🚀 Installation

```bash
npm install server-response-helper
```

---

## 💡 Usage

### 1. Register the Middleware

Import the default `response` middleware and register it with Express.

```ts
import express from 'express';
import response from 'server-response-helper';

const app = express();

app.use(response);
```

### 2. Send Standardized Responses

**🏷️ Example A – custom message (string)**

```ts
app.post('/api/login', (req, res) => {
  const user = { id: 1, name: 'Gautam' };
  res.response(200, 'Login successful!', { user });
});
```

**Result:**

```json
{
  "status": 200,
  "message": "Login successful!",
  "data": { "user": { "id": 1, "name": "Gautam" } },
  "timestamp": "2025-07-01T01:02:45.000Z",
  "path": "/api/login"
}
```

**🏷️ Example B – default message (number index)**

```ts
app.get('/api/item/:id', (req, res) => {
  res.response(404);
});
```

**Assuming:**

```ts
statusMessages[404] = ['Not found', 'Nothing here'];
```

**Result:**

```json
{
  "status": 404,
  "message": "Not found",
  "timestamp": "2025-07-01T01:02:45.000Z",
  "path": "/api/item/42"
}
```

---

## 📚 API Reference

### `responseHelper()`

Express middleware that extends `res` with `.response()`.

### `res.response(status, [messageOrIndex], [data], [path])`

| Parameter        | Type               | Default     | Description                                                                           |
| ---------------- | ------------------ | ----------- | ------------------------------------------------------------------------------------- |
| `status`         | `number`           | —           | **Required.** HTTP status code (`200`, `404`, etc.)                                   |
| `messageOrIndex` | `string \| number` | `0`         | Use a **string** for a custom message, or a **number** to index into default messages |
| `data`           | `any`              | `undefined` | Optional payload under `data` field                                                   |
| `path`           | `string`           | `req.path`  | Optional override of the `path` field                                                 |

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 1. Clone

```bash
git clone https://github.com/DevRGD/server-response-helper.git
cd server-response-helper
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Run tests

```bash
npm test
```

### 4. Lint and format before pushing

```bash
npm run lint
npm run format
```

### 5. Build for publishing

```bash
npm run build
```

Then push your feature branch and open a PR.

---

## 📜 License

MIT © [DevRGD](https://github.com/DevRGD). See the [LICENSE](LICENSE) file.
