import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './global.css';

// Punto de entrada principal de la aplicación React.
// Monta el componente raíz <App /> en el elemento con id 'root' del index.html dentro de React.StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
