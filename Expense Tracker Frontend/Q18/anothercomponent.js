import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCart } from './cartSlice';
import Cart from './Cart';

const App = () => {
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(toggleCart());
  };

  return (
    <div>
      <button onClick={handleCartToggle}>My Cart</button>
      <Cart />
    </div>
  );
};

export default App;
