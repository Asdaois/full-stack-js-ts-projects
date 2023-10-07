import { Result, UseCaseError } from '@core';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CreateUserErrors {
  export class EmailAlreadyExistsError extends Result<UseCaseError> {
    constructor(anEmail: string) {
      super(false, {
        message: `The email ${anEmail} associated for this account already exists`,
      } as UseCaseError);
    }
  }

  export class UsernameTakenError extends Result<UseCaseError> {
    constructor(anUsername: string) {
      super(false, {
        message: `The username ${anUsername} was already taken`,
      } as UseCaseError);
    }
  }
}
