import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authReducer'; 

const MyComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const expenses = useSelector(state => state.expenses.expenses);
  const totalAmount = useSelector(state => state.expenses.totalAmount);

  
};
