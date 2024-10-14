import React, { useState } from 'react';
import './DatePickerPlugin.css';

const DatePickerPlugin = ({ label, onChange, selectedDate: initialDate, format = 'YYYY-MM-DD', showError = false }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate || '');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    onChange(e.target.value); // Callback pour retourner la date sélectionnée
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (format === 'DD/MM/YYYY') {
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    }
    return date.toISOString().split('T')[0]; // Default YYYY-MM-DD
  };

  return (
    <div className="datepicker-container">
      <label>{label}</label>
      <input 
        type="date" 
        value={selectedDate ? formatDate(selectedDate) : ''} 
        onChange={handleDateChange} 
        className={`datepicker-input ${showError && !selectedDate ? 'error' : ''}`} 
        aria-required="true"
      />
      {showError && !selectedDate && <span className="error-message">Please select a valid date.</span>}
    </div>
  );
};

export default DatePickerPlugin;
