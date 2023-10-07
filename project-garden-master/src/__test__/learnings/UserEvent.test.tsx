import React, { useState } from "react";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

const FireEvent = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div>FireEvent.test</div>
      <input
        type="text"
        name="fire"
        data-testid="user-event"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div role="contentinfo">Searching for: {search}</div>
    </>
  );
};

test("render input element", () => {
  render(<FireEvent />);
  expect(screen.getByTestId("user-event")).toBeInTheDocument();
});

test("change value of input", () => {
  render(<FireEvent />);

  userEvent.type(screen.getByTestId("user-event"), "test");

  expect(screen.getByRole("contentinfo")).toHaveTextContent(
    "Searching for: test"
  );
});

