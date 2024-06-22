import React from 'react';
import '../styles/PizzaSizeOptions.css';

const PizzaSizeOptions = ({ size, onChange }) => (
  <div className="pizza-size-options">
    <h3>Select Pizza Size</h3>
    {['small', 'medium', 'large'].map((pizzaSize) => (
      <label key={pizzaSize} className={`pizza-size-option ${size === pizzaSize ? 'selected' : ''}`}>
        <input
          type="radio"
          value={pizzaSize}
          checked={size === pizzaSize}
          onChange={onChange}
        />
        {pizzaSize.charAt(0).toUpperCase() + pizzaSize.slice(1)} (${pizzaSize === 'small' ? '8' : pizzaSize === 'medium' ? '10' : '12'})
      </label>
    ))}
  </div>
);

export default PizzaSizeOptions;
