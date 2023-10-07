import { ApiStatus, IDLE, defaultApiStatus } from "../constants/apiStatus";
import { useMemo, useState } from "react";

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const prepareStatuses = (aStatus: ApiStatus): Statuses => {
  const statuses = {} as Statuses;
  defaultApiStatus.forEach((status) => {
    const normalizedStatus = capitalize(status.toLowerCase());
    const normalizedStatusKey = `is${normalizedStatus}` as keyof Statuses;
    statuses[normalizedStatusKey] = status === aStatus;
  });
  return statuses;
};

export const useApiStatus = (aStatus: ApiStatus = IDLE) => {
  const [status, setStatus] = useState<ApiStatus>(aStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
