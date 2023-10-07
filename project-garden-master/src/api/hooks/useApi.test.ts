import { ERROR, IDLE, PENDING, SUCCESS } from "../constants/apiStatus";
import { renderHook, waitFor } from "@testing-library/react";

import { act } from "react-dom/test-utils";
import { useApi } from "./useApi";

// Test for useApi hook
test("useApi hook", () => {
  const { result } = renderHook(() => useApi(() => {}));
  expect(result.current).toEqual({
    data: undefined,
    error: undefined,
    status: IDLE,
    setData: expect.any(Function),
    setStatus: expect.any(Function),
    execute: expect.any(Function),
    isIdle: true,
    isPending: false,
    isSuccess: false,
    isError: false,
  });
});

test("useApi hook with a promise", async () => {
  const { result } = renderHook(() => useApi(() => Promise.resolve(1)));

  act(() => {
    result.current.execute();
  });

  // Pending... error in the test suite if a test is done without waiting for the promise
  expect(result.current).toEqual({
    data: undefined,
    error: undefined,
    status: PENDING,
    setData: expect.any(Function),
    setStatus: expect.any(Function),
    execute: expect.any(Function),
    isIdle: false,
    isPending: true,
    isSuccess: false,
    isError: false,
  });

  // Success
  await waitFor(() => {
    expect(result.current).toEqual({
      data: 1,
      error: undefined,
      status: SUCCESS,
      setData: expect.any(Function),
      setStatus: expect.any(Function),
      execute: expect.any(Function),
      isIdle: false,
      isPending: false,
      isSuccess: true,
      isError: false,
    });
  });
});

test("useApi hook with a promise and an error", async () => {
  const { result } = renderHook(() =>
    useApi(() => Promise.reject(new Error("error")))
  );

  act(() => {
    result.current.execute();
  });

  await waitFor(() => {
    expect(result.current).toEqual({
      data: undefined,
      error: new Error("error"),
      status: ERROR,
      setData: expect.any(Function),
      setStatus: expect.any(Function),
      execute: expect.any(Function),
      isIdle: false,
      isPending: false,
      isSuccess: false,
      isError: true,
    });
  });
});
