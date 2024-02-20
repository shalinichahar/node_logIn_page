import { useState, useEffect } from 'react';

import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';


const LocalManagement = () => {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('expenseData')) || [];
    setExpenseData(storedData);
  }, []); 

  const addExpense = (newExpense) => {
    setExpenseData((prevData) => {
      const newData = [...prevData, newExpense];
      localStorage.setItem('expenseData', JSON.stringify(newData));
      return newData;
    });
  };

  const deleteExpense = (id) => {
    setExpenseData((prevData) => {
      const newData = prevData.filter((expense) => expense.id !== id);
      localStorage.setItem('expenseData', JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenseData={expenseData} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default LocalManagement;
