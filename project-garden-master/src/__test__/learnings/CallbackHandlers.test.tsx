import { render, screen } from "@testing-library/react";

import { Children } from "react";
import userEvent from "@testing-library/user-event";

interface Props {
  children: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ children, value, onChange }: Props) => {
  return (
    <>
      <label htmlFor="search">{children}</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        role="search"
      />
    </>
  );
};

describe("Search", () => {
  test("calls the onChange callback handler", () => {
    const onChange = jest.fn();

    render(
      <Search value="test" onChange={onChange}>
        Search:
      </Search>
    );

    userEvent.type(screen.getByRole("search"), "test");

    expect(onChange).toHaveBeenCalledTimes(4);
  });
});
