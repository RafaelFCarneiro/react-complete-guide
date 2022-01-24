import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses &&
        expenses.map((exp) => (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            date={exp.date}
            amount={exp.amount}
          />
        ))}
    </Card>
  );
}

export default Expenses;
