import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css'; 

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;