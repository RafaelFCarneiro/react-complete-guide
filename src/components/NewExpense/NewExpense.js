import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const onSaveExpenseDataHandler = (expenseData) => {
    const addedExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(addedExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
