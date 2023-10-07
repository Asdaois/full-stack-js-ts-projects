import { Item, SideBar } from "./SideBar";
import { render, screen } from "@testing-library/react";

const testItems: Item[] = [{name: "Home", href: "/"}, {name: "About", href: "/about"}];
test("render with some items",() => {
  render(<SideBar items={testItems} />);
  const anchorElements = screen.getAllByRole("navigation");

  expect(anchorElements.length).toBe(2);
  expect(anchorElements[0]).toHaveTextContent(testItems[0].name);
  expect(anchorElements[0]).toHaveAttribute("href", testItems[0].href);

  expect(anchorElements[1]).toHaveTextContent(testItems[1].name);
  expect(anchorElements[1]).toHaveAttribute("href", testItems[1].href);
})