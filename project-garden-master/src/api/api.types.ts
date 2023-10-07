import {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  Canceler,
} from "axios";

export type { Canceler };
type AxiosMethods = Pick<
  AxiosInstance,
  "get" | "put" | "post" | "patch" | "delete"
>;

export type withAbortFn = AxiosMethods[keyof AxiosMethods];

export type ApiExecutor<T> = {
  (url: string, body: unknown, config: AxiosRequestConfig): AxiosPromise<T>;
  (url: string, config: AxiosRequestConfig): AxiosPromise<T>;
};

export type ApiExecutorArgs =
  | [string, unknown, AxiosRequestConfig]
  | [string, AxiosRequestConfig];

export type ApiRequestConfig = AxiosRequestConfig & {
  abort?: (cancel: Canceler) => void;
};

export type ApiError = AxiosError;
