import { render, screen } from '@testing-library/react';

import App from './App';

test('renders project title', () => {
  render(<App />);
  expect(screen.getByText(/react boilerplate/i)).toBeInTheDocument();
});