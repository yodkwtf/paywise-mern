import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { swaggerUI, swaggerDocs } from './swagger.js';
import connectDB from './config/db.js';
import authRouter from './routes/auth.js';
import movieRouter from './routes/movies.js';
import { APP_URL } from './config/constants.js';

dotenv.config();
const app = express();

// middlewares
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// routes

app.use('/api/auth', authRouter);
app.use('/api/movies', movieRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '..', '/client', '/build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    return res.json({
      message: 'Welcome to Cinematica API',
      documentation: `${APP_URL}/api-docs`,
    });
  });
}

// connect to database
connectDB();

// run server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
