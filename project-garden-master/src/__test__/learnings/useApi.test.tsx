import { renderHook, waitFor } from "@testing-library/react";
import { useEffect, useState } from "react";

import { getMockServer } from "../getMockServer";

function useApi() {
  const [data, setData] = useState<{ name: string }>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}

// TEST
const server = getMockServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should get data", async () => {
  const { result } = renderHook(() => useApi());
  expect(result.current).toBe(undefined);
  await waitFor(() => expect(result.current).toEqual({ name: "John" }));
});
