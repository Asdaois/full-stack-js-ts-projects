import { Either, Result } from '@core';
import { CreateUserErrors } from './CreateUserErrors';

export type CreateUserResponse = Either<
  | CreateUserErrors.EmailAlreadyExistsError
  | CreateUserErrors.UsernameTakenError
  | Result<unknown>,
  Result<void>
>;
