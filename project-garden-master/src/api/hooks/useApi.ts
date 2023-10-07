import { ERROR, PENDING, SUCCESS } from "../constants/apiStatus";

import { useApiStatus } from "./useApiStatus";
import { useState } from "react";

interface UseApiConfig<T> {
  initialData?: T;
}

type ApiFunction<T = unknown> = (...args: unknown[]) => T | Promise<T>;

export function useApi<TData = unknown, TError = unknown>(
  api: ApiFunction<TData>,
  { initialData }: UseApiConfig<TData> = {}
) {
  const [data, setData] = useState<TData | undefined>(initialData);
  const [error, setError] = useState<TError | unknown>();
  const { status, setStatus, ...normalizedStatuses } = useApiStatus();

  const execute = async <Arguments>(...args: Arguments[]) => {
    try {
      setStatus(PENDING);
      const data = await api(...args);
      setData(data);
      setStatus(SUCCESS);
      return { data, error: null };
    } catch (error) {
      setError(error);
      setStatus(ERROR);
      return { data: null, error };
    }
  };
  return {
    data,
    setData,
    status,
    setStatus,
    error,
    execute,
    ...normalizedStatuses,
  };
}
