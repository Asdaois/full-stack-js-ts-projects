import { Guard, Result } from '@core';
import { ValueObject, ValueObjectProps } from '@domain';

interface UserNameProps extends ValueObjectProps {
  name: string;
}

export class UserName extends ValueObject<UserNameProps> {
  public static minLength = 2;
  public static maxLength = 15;

  public get value(): string {
    return this.props.name;
  }

  public static create(props: UserNameProps): Result<UserName> {
    const userNameResult = Guard.againstNullOrUndefined(props.name, 'username');
    if (userNameResult.isFailure) {
      return Result.fail(userNameResult.getErrorValue());
    }

    const minLengthResult = Guard.againstAtLeast(this.minLength, props.name);
    if (minLengthResult.isFailure) {
      return Result.fail(minLengthResult.getErrorValue());
    }

    const maxLengthResult = Guard.againstAtMost(this.maxLength, props.name);
    if (maxLengthResult.isFailure) {
      return Result.fail(maxLengthResult.getErrorValue());
    }

    return Result.ok(new UserName(props));
  }
}
