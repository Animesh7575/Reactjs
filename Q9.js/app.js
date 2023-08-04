import React from 'react';
import ExpenseItems from './ExpenseItems';

const App = () => {
 
  const expenses = [
    { LocationOfExpenditure: 'Groceries' },
    { LocationOfExpenditure: 'Utilities' },
    { LocationOfExpenditure: 'Entertainment' },
    { LocationOfExpenditure: 'Transportation' },
  
  ];

  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItems key={index} LocationOfExpenditure={expense.LocationOfExpenditure} />
      ))}
    </div>
  );
};

export default App;