import {
  ApiStatus,
  ERROR,
  IDLE,
  PENDING,
  SUCCESS,
} from "../constants/apiStatus";

import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
import { useApiStatus } from "./useApiStatus";

describe("useApiStatus", () => {
  test("should return the correct statuses", () => {
    const { result } = renderHook(() => useApiStatus());
    const statuses = result.current;

    expect(statuses.isIdle).toBe(true);
  });

  test("should change the status", () => {
    const { result } = renderHook(() => useApiStatus());
    const { setStatus } = result.current;
    const changeStatus = (status: ApiStatus) => {
      act(() => {
        setStatus(status);
      });
    };

    changeStatus(PENDING);
    expect(result.current.isPending).toBe(true);
    expect(result.current.status).toBe(PENDING);

    changeStatus(SUCCESS);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.status).toBe(SUCCESS);

    changeStatus(ERROR);
    expect(result.current.isError).toBe(true);
    expect(result.current.status).toBe(ERROR);
  });
});
