import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [moneySpent, setMoneySpent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [editingExpenseId, setEditingExpenseId] = useState(null);

  useEffect(() => {
  
    const expensesRef = firebase.database().ref('expenses');
    expensesRef.on('value', snapshot => {
      const expenseData = snapshot.val();
      if (expenseData) {
        setExpenses(Object.entries(expenseData).map(([id, data]) => ({ id, ...data })));
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

  
    setMoneySpent('');
    setDescription('');
    setCategory('');
  };

  const handleDeleteExpense = (expenseId) => {
    firebase.database().ref(`expenses/${expenseId}`).remove()
      .then(() => {
        console.log('Expense successfully deleted');
      })
      .catch(error => {
        console.error('Error deleting expense:', error);
      });
  };

  const handleEditExpense = (expenseId) => {
    /
    setEditingExpenseId(expenseId);
  };

  const handleEditSubmit = (editedExpense) => {
    firebase.database().ref(`expenses/${editedExpense.id}`).set(editedExpense)
      .then(() => {
        console.log('Expense successfully updated');
        setEditingExpenseId(null);
      })
      .catch(error => {
        console.error('Error updating expense:', error);
      });
  };

  
};

export default Dashboard;
