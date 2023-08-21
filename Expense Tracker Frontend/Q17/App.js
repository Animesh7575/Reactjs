import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import ThemeToggle from './ThemeToggle';
import DownloadButton from './DownloadButton';

const expenses = [
  { name: 'Expense 1', amount: 100, date: '2023-08-01' },
  { name: 'Expense 2', amount: 150, date: '2023-08-10' },
 
];

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        <DownloadButton expenses={expenses} />
      </div>
    </ThemeProvider>
  );
};

export default App;
