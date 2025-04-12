import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';
import data from './data';

function App() {
  const [expenses, setExpenses] = useState(data);

  const [form, setForm] = useState({
    expense: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).every(v => v !== '')) {
      setExpenses([...expenses, form]);
      setForm({ expense: '', description: '', category: '', amount: '', date: '' });
    }
  };

  const handleDelete = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const filtered = expenses.filter(
    item =>
      item.expense.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances. Record, categorize and analyze your spending.</p>
      </header>

      <div className="main">
        <div className="form-section">
          <ExpenseForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
        <div className="table-section">
          <SearchBar search={search} onSearchChange={setSearch} />
          <ExpenseTable expenses={filtered} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
