import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import MoviesProvider from './contexts/moviesContext';
import AuthProvider from './contexts/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MoviesProvider>
        <Toaster />
        <App />
      </MoviesProvider>
    </AuthProvider>
  </React.StrictMode>
);
