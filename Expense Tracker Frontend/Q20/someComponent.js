import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './api'; 
import { setNotification, clearNotification } from './uiSlice';

const SomeComponent = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = async () => {
    try {
      setIsLoading(true);
      dispatch(setNotification({ type: 'loading' }));

      const data = await fetchData(); 

      setIsLoading(false);
      dispatch(setNotification({ type: 'success', message: 'Data fetched successfully!' }));
   
    } catch (error) {
      setIsLoading(false);
      dispatch(setNotification({ type: 'error', message: 'An error occurred while fetching data.' }));
    }
  };

  return (
    <div>
     
      <button onClick={handleFetchData}>Fetch Data</button>
    </div>
  );
};

export default SomeComponent;
