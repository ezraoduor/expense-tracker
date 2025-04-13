import React from 'react';

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <div className="table-area">
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.expense}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
               </td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  );
};

export default ExpenseTable;
