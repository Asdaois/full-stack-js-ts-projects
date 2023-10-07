import { act, renderHook } from "@testing-library/react";
import { useCallback, useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);
  return { count, increment };
}

test("should increment", () => {
  const { result } = renderHook(() => useCounter());
  const { count, increment } = result.current;
  expect(count).toBe(0);

  act(() => {
    increment();
  });

  expect(result.current.count).toBe(1);
});
