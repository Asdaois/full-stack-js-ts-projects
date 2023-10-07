import { render, screen } from "@testing-library/react";
import { useEffect, useState } from "react";

const SearchVariants = () => {
  const [user, setUser] = useState<FalseUser>();

function getInfo(): Promise<FalseUser> {
  return Promise.resolve({ id: 1, name: "test" });
}
  useEffect(() => {
    const loadUser = async () => {
      const user = await getInfo();
      setUser(user);
    }
    loadUser();
  }, [])

  return (
    <>
      <h1>Search Variants</h1>
      {user && <h2>Hello, {user.name}</h2>}
    </>
  );
};

interface FalseUser {
  id: number;
  name: string;
}



test("Use get for elements that exist in screen", () => {
  render(<SearchVariants />);
  expect(screen.getByText("Search Variants")).toBeInTheDocument();
});

test("Use query for check element that don't exist in screen", async () => {
  render(<SearchVariants />);
  expect(screen.queryByText("Hello, test")).toBeNull();
});

test('Use find for elements async rendered', async () => { 
  render(<SearchVariants />);
  expect(await screen.findByText("Hello, test")).toBeInTheDocument();
})