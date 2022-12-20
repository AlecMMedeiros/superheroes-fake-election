import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ElectionProvider from './context/ElectionProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ElectionProvider>
    <App />
    </ElectionProvider>
  </React.StrictMode>
);