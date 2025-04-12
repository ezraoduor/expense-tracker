import React from 'react';

const ExpenseForm = ({ form, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="expense" placeholder="Expense" value={form.expense} onChange={onChange} />
      <input type="text" name="description" placeholder="Description" value={form.description} onChange={onChange} />
      <input type="text" name="category" placeholder="Category" value={form.category} onChange={onChange} />
      <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={onChange} />
      <input type="date" name="date" value={form.date} onChange={onChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
