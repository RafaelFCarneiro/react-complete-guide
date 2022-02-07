import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting document', () => {
  test('renders Hello World as text', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);
    
    const outputElement = screen.getByText(/good to see you/i);
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed" if the button was NOT clicked', () => {
    render(<Greeting />);
    
    userEvent.click(screen.getByRole('button'));

    const outputElement = screen.getByText('changed', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);
    
    userEvent.click(screen.getByRole('button'));

    const outputElement = screen.queryByText(/good to see you/i);
    expect(outputElement).toBeNull();
  });

});
