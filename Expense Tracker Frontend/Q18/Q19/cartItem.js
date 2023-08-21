import React from 'react';
import { useSelector } from 'react-redux';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-items">
      {Object.keys(cartItems).map((itemId) => (
        <div key={itemId}>
          Item ID: {itemId}, Quantity: {cartItems[itemId].quantity}
        </div>
      ))}
    </div>
  );
};

export default CartItems;
