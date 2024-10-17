# 📅 DatePickerPlugin - React Date Picker Component

### Auteur :
👤 Marc Torres

**DatePickerPlugin** est un composant React simple et facile à utiliser pour ajouter une sélection de date dans vos formulaires. Il permet de choisir une date facilement et d'ajuster la sélection à vos besoins dans un projet React.

## 📦 Installation

Installez le plugin directement depuis npm en utilisant la commande suivante :

```bash
npm install my-datepicker-plugin
```

## 🚀 Utilisation

Une fois installé, vous pouvez utiliser le plugin dans n'importe quel composant de votre application React. Voici un exemple basique d'utilisation :

```jsx
import React, { useState } from 'react';
import DatePicker from 'my-datepicker-plugin'; // Importer le plugin

const MyFormComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div>
      <h2>Formulaire avec Date Picker</h2>
      <DatePicker
        label="Choisissez une date"
        onChange={(date) => setSelectedDate(date)}
      />
      <p>Date sélectionnée : {selectedDate}</p>
    </div>
  );
};

export default MyFormComponent;
```

### Props

Le composant **DatePickerPlugin** accepte les props suivantes :

| Props      | Type   | Description                                                                                     | Obligatoire |
|------------|--------|-------------------------------------------------------------------------------------------------|-------------|
| `label`    | string | Le texte qui apparaît au-dessus du champ de sélection de la date.                                | Oui         |
| `onChange` | func   | Fonction appelée avec la nouvelle valeur de date lorsque celle-ci est sélectionnée.              | Oui         |
| `className`| string | Ajoute une classe CSS personnalisée au champ de sélection (optionnel).                           | Non         |
| `value`    | string | Permet de définir une valeur par défaut pour la date (format YYYY-MM-DD).                        | Non         |

## 🎨 Personnalisation du style

Le style par défaut du **DatePickerPlugin** peut être personnalisé en modifiant le fichier CSS fourni ou en ajoutant vos propres classes CSS.

### Exemple de style personnalisé :

```css
/* Fichier: DatePickerPlugin.css */
.datepicker-container {
  margin: 20px 0;
}

.datepicker-input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 400px;
}
```

Vous pouvez également passer une classe CSS personnalisée à travers la prop `className` pour modifier les styles du composant :

```jsx
<DatePicker
  label="Votre date de naissance"
  className="my-custom-datepicker"
/>
```

## 🛠 Développement

### Installation des dépendances

Si vous souhaitez modifier ou contribuer au plugin, clonez le dépôt et installez les dépendances en local :

```bash
git clone https://github.com/marco3866/my-datepicker-plugin.git
cd my-datepicker-plugin
npm install
```

### Scripts disponibles

| Script           | Description                                                   |
|------------------|---------------------------------------------------------------|
| `npm run dev`    | Lancer un serveur de développement pour tester le composant.   |
| `npm run build`  | Générer la version de production du composant.                 |
| `npm run lint`   | Vérifier la qualité du code avec ESLint.                       |
| `npm run preview`| Lancer un aperçu local de la version de production.            |

## 🌟 Fonctionnalités à venir

- Ajout d'options de localisation pour supporter différents formats de date.
- Ajout d'un thème sombre pour le composant.
- Validation de la sélection des dates avec des intervalles (dates minimum/maximum).

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à soumettre une issue ou une pull request si vous souhaitez ajouter de nouvelles fonctionnalités ou résoudre des bugs.

## 📄 Licence

Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.

## 🙌 Remerciements

Merci à tous ceux qui contribuent ou utilisent DatePickerPlugin dans leurs projets React !
