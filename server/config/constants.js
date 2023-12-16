// Get the app url based on the environment
export const DEV_URL = 'http://localhost:5000';
export const PROD_URL = 'https://cinematica-mern-api.vercel.app';
export const API_URL =
  process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;
export const SWAGGER_CSS_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';
