import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if requests succeeds', async () => {
    jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve({
      json: async () => [{ id: 'p1', title:'test' }]
    }))
    render(<Async />);
    
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
