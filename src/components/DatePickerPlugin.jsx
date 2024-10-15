import React, { useState } from 'react';
import './DatePickerPlugin.css';

/**
 * DatePickerPlugin - Composant de sélection de date
 * 
 * @param {string} label - Le texte à afficher au-dessus du champ de sélection de la date.
 * @param {function} onChange - Fonction callback appelée lorsque la date change.
 * @param {string} [selectedDate] - La date sélectionnée initiale (au format 'YYYY-MM-DD').
 * @param {string} [format='YYYY-MM-DD'] - Format de la date à afficher, par défaut 'YYYY-MM-DD'.
 * @param {boolean} [showError=false] - Indique si un message d'erreur doit être affiché si aucune date n'est sélectionnée.
 */
const DatePickerPlugin = ({ label, onChange, selectedDate: initialDate, format = 'YYYY-MM-DD', showError = false }) => {
  // State local pour stocker la date sélectionnée
  const [selectedDate, setSelectedDate] = useState(initialDate || '');

  // Fonction pour gérer le changement de date
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Met à jour l'état local avec la nouvelle date sélectionnée
    onChange(e.target.value); // Appelle la fonction de callback passée en prop pour informer du changement
  };

  // Fonction pour formater la date en fonction du format spécifié (par défaut YYYY-MM-DD)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (format === 'DD/MM/YYYY') {
      // Formatage personnalisé DD/MM/YYYY
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    }
    // Format par défaut: YYYY-MM-DD
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="datepicker-container">
      {/* Étiquette du champ date */}
      <label>{label}</label>
      
      {/* Champ input pour la sélection de date */}
      <input 
        type="date" 
        value={selectedDate ? formatDate(selectedDate) : ''} 
        onChange={handleDateChange} 
        className={`datepicker-input ${showError && !selectedDate ? 'error' : ''}`} 
        aria-required="true" // Indique à l'accessibilité que ce champ est requis
      />
      
      {/* Affichage du message d'erreur si aucune date n'est sélectionnée et que showError est vrai */}
      {showError && !selectedDate && <span className="error-message">Please select a valid date.</span>}
    </div>
  );
};

export default DatePickerPlugin;
