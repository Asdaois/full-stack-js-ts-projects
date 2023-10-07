export class Result<T> {
  public error: T | string;
  private value: T;

  public constructor(
    private _isSuccess: boolean,
    error: T | string | null,
    value?: T
  ) {
    if (_isSuccess && error) {
      throw new Error(
        'InvalidOperation: A result cannot be successful and contain an error'
      );
    }

    if (!_isSuccess && !error) {
      throw new Error(
        'InvalidOperation: A failing result needs to contain an error message'
      );
    }

    this._isFailure = !_isSuccess;
    this.error = error ?? 'error no defined';
    this.value = value as T;

    Object.freeze(this);
  }

  private readonly _isFailure: boolean;

  get isFailure(): boolean {
    return this._isFailure;
  }

  get isSuccess(): boolean {
    return this._isSuccess;
  }

  static fail<U>(anErrorMessage: string): Result<U> {
    return new Result<U>(false, anErrorMessage);
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, null, value);
  }

  public static combine(results: Array<Result<unknown>>): Result<any> {
    for (const result of results) {
      if (result.isFailure) return result;
    }

    return Result.ok();
  }

  public getErrorValue(): T {
    return this.error as T;
  }

  public getValue(): T {
    if (!this.isSuccess) {
      console.log(this.error);
      throw new Error(
        "Can't get the value of an error result. Use 'errorValue instead."
      );
    }

    return this.value;
  }
}

export type Either<L, A> = FailOperation<L, A> | SuccessOperation<L, A>;

export class FailOperation<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isFailed(): this is FailOperation<L, A> {
    return true;
  }

  isSuccessful(): this is SuccessOperation<L, A> {
    return false;
  }
}

export class SuccessOperation<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  isFailed(): this is FailOperation<L, A> {
    return false;
  }

  isSuccessful(): this is SuccessOperation<L, A> {
    return true;
  }
}

export const failOperation = <L, A>(l: L): Either<L, A> => {
  return new FailOperation(l);
};

export const successOperation = <L, A>(a: A): Either<L, A> => {
  return new SuccessOperation<L, A>(a);
};
