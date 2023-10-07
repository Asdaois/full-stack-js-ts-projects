import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

const FireEvent = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div>FireEvent.test</div>
      <input
        type="text"
        name="fire"
        data-testid="fire-event"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div role="contentinfo">Searching for: {search}</div>
    </>
  );
};

test("render input element", () => {
  render(<FireEvent />);
  expect(screen.getByTestId("fire-event")).toBeInTheDocument();
});

test("change value of input", () => {
  render(<FireEvent />);

  fireEvent.change(screen.getByTestId("fire-event"), {
    target: { value: "test" },
  });

  expect(screen.getByRole("contentinfo")).toHaveTextContent(
    "Searching for: test"
  );
});
