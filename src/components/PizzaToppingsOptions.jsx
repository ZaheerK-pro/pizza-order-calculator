import React from 'react';
import '../styles/PizzaToppingsOptions.css';

const toppingsList = ['Pepperoni', 'Mushrooms', 'Onions', 'Olives', 'Bacon'];

const PizzaToppingsOptions = ({ toppings, onChange }) => (
  <div className="pizza-toppings-options">
    <h3>Select Toppings</h3>
    {toppingsList.map((topping) => (
      <label key={topping} className="topping-option">
        <input
          type="checkbox"
          value={topping}
          checked={toppings.includes(topping)}
          onChange={onChange}
        />
        {topping} ($1)
      </label>
    ))}
  </div>
);

export default PizzaToppingsOptions;
