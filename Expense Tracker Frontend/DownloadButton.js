import React from 'react';

const DownloadButton = ({ expenses }) => {
  const downloadCSV = () => {
    const csvContent = "ExpenseName,Amount,Date\n" +
      expenses.map(expense => `${expense.name},${expense.amount},${expense.date}`).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'expenses.csv';
    a.click();
  };

  return <button onClick={downloadCSV}>Download Expenses</button>;
};

export default DownloadButton;
