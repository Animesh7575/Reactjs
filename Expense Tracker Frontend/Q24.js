import React from 'react';
import { render } from '@testing-library/react';
import ExpenseList from './ExpenseList';

test('renders an empty expense list message', () => {
  const { getByText } = render(<ExpenseList expenses={[]} />);
  const emptyMessage = getByText('No expenses found.');
  expect(emptyMessage).toBeInTheDocument();
});

test('displays a list of expenses', () => {
  const expenses = [
    { id: 1, title: 'Rent', amount: 1000 },
    { id: 2, title: 'Groceries', amount: 200 },
  ];

  const { getByText } = render(<ExpenseList expenses={expenses} />);

  expenses.forEach(expense => {
    const expenseTitle = getByText(expense.title);
    const expenseAmount = getByText(`$${expense.amount}`);
    expect(expenseTitle).toBeInTheDocument();
    expect(expenseAmount).toBeInTheDocument();
  });
});

test('displays the correct total amount', () => {
  const expenses = [
    { id: 1, title: 'Rent', amount: 1000 },
    { id: 2, title: 'Groceries', amount: 200 },
  ];

  const { getByText } = render(<ExpenseList expenses={expenses} />);

  const totalAmount = getByText('Total Amount: $1200');
  expect(totalAmount).toBeInTheDocument();
});


