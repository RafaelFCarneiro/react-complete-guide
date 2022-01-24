import { render, screen } from '@testing-library/react';
import App from './App';

test("renders let's get started", () => {
  render(<App />);
  const linkElement = screen.getByText(/Let's get started/i);
  expect(linkElement).toBeInTheDocument();
});
