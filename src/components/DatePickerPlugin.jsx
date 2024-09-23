import React, { useState } from 'react';
import './DatePickerPlugin.css';

const DatePickerPlugin = ({ label, onChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    onChange(e.target.value); // Callback pour retourner la date sélectionnée
  };

  return (
    <div className="datepicker-container">
      <label>{label}</label>
      <input 
        type="date" 
        value={selectedDate} 
        onChange={handleDateChange} 
        className="datepicker-input" 
      />
    </div>
  );
};

export default DatePickerPlugin;
