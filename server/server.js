import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import paymentsRoutes from './routes/payments.js';

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// routes
app.get('/', (req, res) => {
  return res.json({ message: 'Welcome to Paywise API' });
});
app.use('/api/payments', paymentsRoutes);

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${colors.cyan.underline(
      `http://localhost:${port}`
    )}`
  );
});
