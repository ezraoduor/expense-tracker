import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';
import expenses from './data'; 

function App() {
  const [expensesList, setExpensesList] = useState(expenses); 
  const [form, setForm] = useState({
    expense: '',
    description: '',
    amount: '',
    category: '',
    date: ''
  });
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).every((v) => v !== '')) {
      const newExpense = { ...form };
      setExpensesList([...expensesList, newExpense]);
      setForm({
        expense: '',
        description: '',
        amount: '',
        category: '',
        date: ''
      });
    }
  };

  const handleDelete = (index) => {
    setExpensesList(expensesList.filter((_, i) => i !== index)); 
  };

  const filtered = expensesList.filter(
    (item) =>
      item.expense.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances with this. Record, categorize, and analyze your spending.</p>
      </header>

      <div className="main">
        <ExpenseForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
        <div className="table-area">
          <SearchBar search={search} onSearchChange={setSearch} />
          <ExpenseTable expenses={filtered} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
