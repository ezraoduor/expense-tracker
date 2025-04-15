## Expense Tracker

A simple and clean Expense Tracker built with **React**. It allows users to add, view, search, and delete expense records. The layout is modern, minimalistic (black & white), and fully responsive.

## installation Guide
Follow these steps to get the project up and running locally on your machine:

1. Clone the Repository
First, clone the repository from GitHub using the command below:

git clone https://github.com/ezraoduor/expense-tracker.git
cd expense-tracker
2. Install Dependencies
Install all required dependencies using npm:

npm install
This will install React and all other libraries listed in your package.json.

3. Run the Development Server
Start the React development server:
npm start
This will launch the app in your browser at:
http://localhost:3000
Changes to the code will automatically refresh the browser.

## 📂 Project Structure

expense-tracker/
│
src/- Main source code folder

│   components/-Reusable React components

│   │ExpenseForm.js -Form to add new expenses

│   │ExpenseTable.js -Displays expense list in a table

│   │SearchBar.js -Search input for filtering expenses


│   ├── data.js  

│   ├── App.js   

│   ├── App.css 

│   └── index.js           
│
├── .gitignore 

├── package.json 

├── README.md   

└── vite.config.js / 

## How the expense tracker works

How the Expense Tracker App Works
The Expense Tracker app helps users manage their expenses. Here's a quick overview of its features:

Add Expenses: Users can input expense details such as name, description, amount, category, and date. When the form is submitted, the expense is added to the list.

View Expenses: All expenses are displayed in a table with columns for Expense, Description, Amount, Category, and Date.

Search Expenses: A search bar allows users to filter expenses by name or description.

Delete Expenses: Each expense has a Delete button that removes it from the list when clicked.

The app uses React state to manage expenses, form inputs, and search functionality. The user interface is simple, with a clean black-and-white theme. The list updates automatically as users add or delete expenses.


## Technologies Used
React: For building the user interface.

CSS: For styling the app.


## License
This project is open-source and available under the MIT License.





