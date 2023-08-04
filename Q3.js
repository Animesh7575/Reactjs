import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const handleChange = (event) => {
    
    const userInput = event.target.value;
   
    console.log(userInput);
  };

  return (
    <form>
      <div className='new-expense_controls'>
        <div className='new-expense_control'>
          <label>Title</label>
          <input type='text' onChange={handleChange} />
        </div>
        <div className='new-expense_control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" onChange={handleChange} />
        </div>
        <div className='new-expense_control'>
          <label>Date</label>
          <input type='date' min="2019-01-01" max="2022-12-31" onChange={handleChange} />
        </div>
      </div>
      <div className='new-expense_action'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;