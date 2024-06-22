import React from 'react';
import '../styles/PriceBreakdown.css';

const PriceBreakdown = ({ size, toppings, crust, prices }) => (
  <div className="price-breakdown">
    <h3>Price Breakdown</h3>
    <p>Size: {size.charAt(0).toUpperCase() + size.slice(1)} (${prices.size[size]})</p>
    <p>Toppings ({toppings.length}): ${toppings.length * prices.toppings}</p>
    <p>Crust: {crust.charAt(0).toUpperCase() + crust.slice(1)} (${prices.crust[crust]})</p>
  </div>
);

export default PriceBreakdown;
