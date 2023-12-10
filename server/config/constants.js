// Get the app url based on the environment
export const APP_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://cinematica-dk.vercel.app'
    : 'http://localhost:5000';
