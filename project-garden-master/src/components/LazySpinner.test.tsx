import { render, screen } from "@testing-library/react";

import LazySpinner from "./LazySpinner";

test("can render", () => {
  render(<LazySpinner show={true} />);
});

test("can render with delay", () => {
  render(<LazySpinner show={true} delay={9000} />);
});

test("can render with delay and show false", () => {
  render(<LazySpinner show={false} delay={9000} />);
});

test("can render with delay and show true", () => {
  render(<LazySpinner show={true} delay={9000} />);
});

test("can render with delay and show false and no delay", () => {
  render(<LazySpinner show={false} />);
});

test("animation class is added", () => {
  render(<LazySpinner show={true} />);
  expect(screen.getByTestId("lazy-spinner")).toHaveClass("animate-spin");
});

test("animation class is not added", () => {
  render(<LazySpinner show={false} />);
  expect(() => screen.getByTestId("lazy-spinner")).toThrow();
});

test("animation class is added with delay", () => {
  render(<LazySpinner show={true} delay={9000} />);
  expect(screen.getByTestId("lazy-spinner")).toHaveClass("animate-spin");
})

test("animation class is not added with delay", async () => {
  render(<LazySpinner show={false} delay={100} />);
  expect(() => screen.getByTestId("lazy-spinner")).toThrow();
})
