import { render, screen } from '@testing-library/react';
import ExpenseItem from './ExpenseItem';

test('renders item date', () => {
  render(createExpenseItem(expenseDataMock));
  const yeahElement = screen.getByText('2021');
  const monthElement = screen.getByText('March');
  const dayElement = screen.getByText('28');

  expect(yeahElement).toBeInTheDocument();
  expect(monthElement).toBeInTheDocument();
  expect(dayElement).toBeInTheDocument();
});

test('renders item title!', () => {
  render(createExpenseItem(expenseDataMock));
  const linkElement = screen.getByText(expenseDataMock.title);
  expect(linkElement).toBeInTheDocument();
});

test('renders item amount!', () => {
  render(createExpenseItem(expenseDataMock));
  const linkElement = screen.getByText(expenseDataMock.amount);
  expect(linkElement).toBeInTheDocument();
});

const expenseDataMock = {
  id: '1',
  date: new Date(2021, 2, 28),
  title: 'Car INsurance',
  amount: 294.67,
};

const createExpenseItem = (expense) => (
  <ExpenseItem
    key={expense.id}
    title={expense.title}
    date={expense.date}
    amount={expense.amount}
  />
);