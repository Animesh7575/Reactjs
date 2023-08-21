import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const isVisible = useSelector((state) => state.cart.isVisible);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cart">
    
    </div>
  );
};

export default Cart;
