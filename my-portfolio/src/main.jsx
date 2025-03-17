// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming you have the App component in src/App.jsx
import './index.css'; // Assuming you have some styles in index.css

// Render the App component into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
