import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((e) => (
        <ExpenseItem
          title={e.title}
          amount={e.amount}
          date={e.date}
          key={e.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
