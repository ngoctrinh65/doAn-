import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './layouts/AuthContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider> {/* Bọc App trong AuthProvider */}
      <App />
    </AuthProvider>
  </BrowserRouter>
);
