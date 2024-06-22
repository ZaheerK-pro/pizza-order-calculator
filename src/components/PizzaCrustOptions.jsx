import React from 'react';
import '../styles/PizzaCrustOptions.css';

const PizzaCrustOptions = ({ crust, onChange }) => (
  <div className="pizza-crust-options">
    <h3>Select Crust Type</h3>
    {['thin', 'thick', 'glutenFree'].map((crustType) => (
      <label key={crustType} className={`crust-option ${crust === crustType ? 'selected' : ''}`}>
        <input
          type="radio"
          value={crustType}
          checked={crust === crustType}
          onChange={onChange}
        />
        {crustType.charAt(0).toUpperCase() + crustType.slice(1)} ({crustType === 'thin' ? '$0' : crustType === 'thick' ? '$2' : '$3'})
      </label>
    ))}
  </div>
);

export default PizzaCrustOptions;
