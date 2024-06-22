import React, { useState } from 'react';
import PizzaSizeOptions from './PizzaSizeOptions';
import PizzaToppingsOptions from './PizzaToppingsOptions';
import PizzaCrustOptions from './PizzaCrustOptions';
import PriceBreakdown from './PriceBreakdown';
import '../styles/PizzaOrderForm.css';

const PizzaOrderForm = () => {
  const [size, setSize] = useState('medium');
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState('thin');

  const prices = {
    size: {
      small: 8,
      medium: 10,
      large: 12,
    },
    toppings: 1,
    crust: {
      thin: 0,
      thick: 2,
      glutenFree: 3,
    },
  };

  const handleSizeChange = (event) => setSize(event.target.value);
  const handleToppingChange = (event) => {
    const selectedTopping = event.target.value;
    setToppings((prevToppings) =>
      prevToppings.includes(selectedTopping)
        ? prevToppings.filter((topping) => topping !== selectedTopping)
        : [...prevToppings, selectedTopping]
    );
  };
  const handleCrustChange = (event) => setCrust(event.target.value);

  const calculatePrice = () => {
    const sizePrice = prices.size[size];
    const toppingsPrice = toppings.length * prices.toppings;
    const crustPrice = prices.crust[crust];
    return sizePrice + toppingsPrice + crustPrice;
  };

  return (
    <div className="pizza-order-form">
      <PizzaSizeOptions size={size} onChange={handleSizeChange} />
      <PizzaToppingsOptions toppings={toppings} onChange={handleToppingChange} />
      <PizzaCrustOptions crust={crust} onChange={handleCrustChange} />
      <PriceBreakdown size={size} toppings={toppings} crust={crust} prices={prices} />
      <div className="total-price">
        <h2>Total Price: ${calculatePrice()}</h2>
      </div>
    </div>
  );
};

export default PizzaOrderForm;
