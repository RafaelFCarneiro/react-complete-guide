import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList({ items, filter }) {
  if (!items.length) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          date={exp.date}
          amount={exp.amount}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;