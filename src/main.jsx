import { StrictMode } from 'react'; // Import de StrictMode pour activer des vérifications supplémentaires en mode développement
import { createRoot } from 'react-dom/client'; // Import de la méthode createRoot pour créer un point de montage React
import App from './App.jsx'; // Import du composant principal App
import './index.css'; // Import des styles globaux de l'application

/**
 * Point d'entrée principal de l'application
 * 
 * Crée une racine React en utilisant createRoot et rend le composant App
 * à l'intérieur du div avec l'ID 'root' dans le document HTML.
 */
createRoot(document.getElementById('root')).render(
  // Le mode strict est activé pour des vérifications supplémentaires en mode développement
  <StrictMode>
    <App /> {/* Rendu du composant principal Ap */}
  </StrictMode>
);
