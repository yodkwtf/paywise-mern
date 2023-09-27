import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();
const app = express();

// routes
app.get('/', (req, res) => {
  return res.json({ message: 'Welcome to Paywise API' });
});

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${colors.cyan.underline(
      `http://localhost:${port}`
    )}`
  );
});
