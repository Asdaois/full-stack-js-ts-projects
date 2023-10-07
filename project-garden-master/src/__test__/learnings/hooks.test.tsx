import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

const HooksTests = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};

const content = (count:number) => `Count is ${count}`;

test('handles onClick', () => { 
  render(<HooksTests />);
  const buttonElement = screen.getByText('Add One');

  const contentElement = screen.getByRole('contentinfo');
  expect(contentElement).toHaveTextContent(content(0));

  fireEvent.click(buttonElement);
  expect(contentElement).toHaveTextContent(content(1));
})