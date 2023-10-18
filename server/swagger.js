import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

// Get the app url based on the environment
const appUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://cinematica-dk.vercel.app'
    : 'http://localhost:5000';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Cinematica API',
      version: '1.0.0',
      description: 'Cinematica API Documentation',
      contact: {
        name: 'Durgesh Chaudhary',
        email: '48durgesh.kumar@gmail.com',
      },
    },
    servers: [appUrl],
  },
  apis: ['./routes/auth.js', './routes/movies.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

export { swaggerUI, swaggerDocs };
