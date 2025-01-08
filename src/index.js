import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from 'react-dom/client'
import App from './App';
import ThemeProvider from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
