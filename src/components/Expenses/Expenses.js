import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = setFilteredYear;
  const filteredItems = getFilteredExpenses(filteredYear, expenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} filter={{ year: filteredYear }} />
    </Card>
  );
}

export default Expenses;

function getFilteredExpenses(filteredYear, items = []) {
  return items.filter((exp) =>
    exp.date.getFullYear().toString().includes(filteredYear)
  );
}
