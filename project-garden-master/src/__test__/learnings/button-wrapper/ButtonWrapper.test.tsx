import { fireEvent, render, screen } from "@testing-library/react";

import { ButtonWrapper } from "./ButtonWraper";

const testTitle = "calculate";
test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title={testTitle} />);
  const buttonElement = screen.getByText(testTitle);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
