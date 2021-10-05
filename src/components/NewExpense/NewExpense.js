import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };
  const [addingExpenses, setAddingExpenses] = useState(false);

  const toggleForm = () => {
    setAddingExpenses((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {!addingExpenses && <button onClick={toggleForm}>Add New Expense</button>}
      {addingExpenses && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
