import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [moneySpent, setMoneySpent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
   
    const expensesRef = firebase.database().ref('expenses');
    expensesRef.on('value', snapshot => {
      const expenseData = snapshot.val();
      if (expenseData) {
        setExpenses(Object.values(expenseData));
      }
    });
  }, []);

  const handleExpenseSubmit = () => {
    const newExpense = {
      moneySpent,
      description,
      category
    };

    firebase.database().ref('expenses').push(newExpense);

    input fields
    setMoneySpent('');
    setDescription('');
    setCategory('');
  };

  
};

export default Dashboard;
