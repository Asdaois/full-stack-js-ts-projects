import React, { useEffect, useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";

import { getMockServer } from "../getMockServer";
import { rest } from "msw";
import { setupServer } from "msw/node";

const APIComponent = () => {
  const [data, setData] = useState<{ name: String }>();

  useEffect(() => {
    let isMounted = true;

    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};

const server = getMockServer()

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets date", async () => {
  render(<APIComponent />);

  const out = await screen.findByRole("contentinfo");
  expect(out).toHaveTextContent("Name is John");
});
