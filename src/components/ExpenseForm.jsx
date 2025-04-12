import React from 'react';

const ExpenseForm = ({ form, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="expense"
        value={form.expense}
        onChange={onChange}
        placeholder="Expense"
        required
      />
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={onChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={onChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={onChange}
        placeholder="Category"
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={onChange}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
