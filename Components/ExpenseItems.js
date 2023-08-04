import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const deleteExpenseHandler = () => {
   
    const expenseItemElement = document.getElementById(props.id);
    if (expenseItemElement) {
      expenseItemElement.remove();
    }
  };

  return (
    <Card className='expense-item' id={props.id}>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={() => console.log('Clicked!')}>Change title</button>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;