import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { swaggerUI, swaggerDocs } from './swagger.js';
import connectDB from './config/db.js';
import authRouter from './routes/auth.js';
import movieRouter from './routes/movies.js';
import {
  API_URL,
  swaggerCustomCssUrl,
  swaggerCustomJs,
} from './config/constants.js';

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// routes
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, {
    customCss: swaggerCustomJs,
    customCssUrl: swaggerCustomCssUrl,
  })
);
app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to Cinematica API',
    documentation: `${API_URL}/api-docs`,
  });
});
app.use('/api/auth', authRouter);
app.use('/api/movies', movieRouter);

// connect to database
connectDB();

// run server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
