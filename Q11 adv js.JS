import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
    const filteredExpenses = props.items.filter(
      (expense) => expense.date.getFullYear() === +selectedYear
    );
    
    setFilteredExpenses(filteredExpenses);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;