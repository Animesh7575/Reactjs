import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense_controls'>
        <div className='new-expense_control'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={userInput.title}
            onChange={handleChange}
          />
        </div>
        <div className='new-expense_control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            name='amount'
            value={userInput.amount}
            onChange={handleChange}
          />
        </div>
        <div className='new-expense_control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            name='date'
            value={userInput.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='new-expense_action'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;