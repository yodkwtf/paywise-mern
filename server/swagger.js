import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { DEV_URL, PROD_URL } from './config/constants.js';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cinematica API',
      version: '1.0.0',
      description: 'Cinematica API Documentation',
      contact: {
        name: 'Durgesh Chaudhary',
        email: '48durgesh.kumar@gmail.com',
      },
    },
    components: {
      securitySchemes: {
        Auth: {
          type: 'http',
          scheme: 'Bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        Auth: [],
      },
    ],
    servers: [
      {
        url: DEV_URL,
      },
      {
        url: PROD_URL,
      },
    ],
  },
  apis: ['./routes/auth.js', './routes/movies.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication-related APIs
 *   name: Movies
 *   description: Movie-related APIs
 */

export { swaggerUI, swaggerDocs };
