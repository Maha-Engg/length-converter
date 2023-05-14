import React, { useState } from 'react';
import './App.css';
const LengthConverter = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('feet');

  const convertLength = () => {
    // Define conversion factors for each unit
    const conversionFactors = {
      meters: {
        feet: 3.28084,
        inches: 39.3701,
        centimeters: 100,
      },
      feet: {
        meters: 0.3048,
        inches: 12,
        centimeters: 30.48,
      },
      inches: {
        meters: 0.0254,
        feet: 0.0833333,
        centimeters: 2.54,
      },
      centimeters: {
        meters: 0.01,
        feet: 0.0328084,
        inches: 0.393701,
      },
    };

    // Convert from the "from" unit to the "to" unit
    const factor = conversionFactors[fromUnit][toUnit];
    const result = fromValue * factor;

    // Set the result state
    setToValue(result);
  };

  return (
    <div className='container'>
      <h2>Length Converter</h2>
      <div className='unit'>
        <label>
          From:
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
          />
          <select  className='select' value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            <option value="meters">Meters</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
            <option value="centimeters">Centimeters</option>
          </select>
        </label>
      </div>
      <div className='to'>
        <label>
          To:
          <input type="text" value={toValue} readOnly />
          <select className='select' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value="meters">Meters</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
            <option value="centimeters">Centimeters</option>
          </select>
        </label>
      </div>
      <button className='btn' onClick={convertLength}>Convert</button>
    </div>
  );
};

export default LengthConverter;
