import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, addToCart, removeFromCart, selectTotalQuantity } from './cartSlice';
import Cart from './Cart';
import CartItems from './CartItems';

const App = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectTotalQuantity);

  const handleAddToCart = (productId) => {
    dispatch(addToCart({ id: productId }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  

  return (
    <div>
      <button onClick={handleCartToggle}>My Cart ({totalQuantity})</button>
      <Cart />
      <CartItems />
    </div>
  );
};

export default App;
