import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

import movieRouter from './routes/movies.js';

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
  return res.json({ message: 'Welcome to Cinematica API' });
});
app.use('/api/movies', movieRouter);

// connect to database
connectDB();

// run server
const port = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${port}`);
});
