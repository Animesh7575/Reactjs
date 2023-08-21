import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to retrieve cart data
    axios.get('/api/cart')
      .then(response => {
        setCartItems(response.data);
        setIsLoading(false);
        toast.success('Cart data retrieved successfully.');
      })
      .catch(error => {
        setIsLoading(false);
        toast.error('Error retrieving cart data.');
      });
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
