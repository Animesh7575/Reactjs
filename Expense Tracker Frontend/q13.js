import React from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const handleIncrementBy5 = () => {
    dispatch({ type: "INCREMENTBY5" });
  };

  const handleDecrementBy5 = () => {
    dispatch({ type: "DECREMENTBY5" });
  };

  return (
    <div>
      <h1>Counter App</h1>
  
      <button onClick={handleIncrementBy5}>IncrementBy5</button>
      <button onClick={handleDecrementBy5}>DecrementBy5</button>
    </div>
  );
};

export default App;
