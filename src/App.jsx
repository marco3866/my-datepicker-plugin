import { useState } from 'react'; // Import du hook useState pour gérer l'état local dans le composant
import reactLogo from './assets/react.svg'; // Import de l'image du logo React
import viteLogo from '/vite.svg'; // Import de l'image du logo Vite
import './App.css'; // Import des styles CSS pour le composant App

/**
 * Composant principal de l'application
 */
function App() {
  // Déclare un état local "count" initialisé à 0, et une fonction "setCount" pour le mettre à jour
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Section des logos Vite et React avec des liens */}
      <div>
        {/* Lien vers le site de Vite avec le logo */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* Lien vers le site de React avec le logo */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Titre principal */}
      <h1>Vite + React</h1>

      {/* Section de la carte avec un bouton pour incrémenter le compteur */}
      <div className="card">
        {/* Bouton qui incrémente la valeur de "count" lorsque l'on clique dessus */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} {/* Affiche la valeur actuelle de "count" */}
        </button>

        {/* Paragraphe avec un petit guide pour l'édition des fichiers */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          {/* Message pour informer l'utilisateur qu'il peut éditer et sauvegarder pour tester le Hot Module Replacement */}
        </p>
      </div>

      {/* Paragraphe avec un lien vers la documentation Vite et React */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        {/* Suggestion à l'utilisateur de cliquer sur les logos pour en savoir plus */}
      </p>
    </>
  );
}

export default App; // Export du composant pour qu'il soit utilisé dans d'autres parties de l'application

