import { render, screen } from "@testing-library/react";

import { User } from "./User";

test('renders a name', () => {
  render(<User name="Sara" />);
  const userElement = screen.getByText(/Sara/i);
  expect(userElement).toBeInTheDocument();
  expect(userElement).toHaveTextContent(/Hello, Sara/i);
})