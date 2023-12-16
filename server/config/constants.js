// Get the app url based on the environment
export const DEV_URL = 'http://localhost:5000';
export const PROD_URL = 'https://cinematica-mern-api.vercel.app';
export const API_URL =
  process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;
export const swaggerCustomJs = [
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui-bundle.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui-standalone-preset.min.js',
];
export const swaggerCustomCssUrl = [
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui-standalone-preset.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.css',
];
