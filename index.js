import express from 'express';
import responseHelper from 'server-response-helperv2';

const app = express();

app.use(responseHelper());

app.get('/api/login', (req, res) => {
  const user = { id: 1, name: 'Gautam' };
  res.response(200, 'Login successful.', { user }, req.path);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
