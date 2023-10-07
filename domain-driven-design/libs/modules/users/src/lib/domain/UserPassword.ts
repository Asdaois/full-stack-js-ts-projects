import { Guard, Result } from '@core';
import { ValueObject, ValueObjectProps } from '@domain';

interface UserPasswordProps extends ValueObjectProps {
  value: string;
  hashed?: boolean;
}

export class UserPassword extends ValueObject<UserPasswordProps> {
  public static minLength = 7;

  get value(): string {
    return this.props.value;
  }

  public static create(props: UserPasswordProps): Result<UserPassword> {
    const propsResult = Guard.againstNullOrUndefined(props.value, 'password');
    if (propsResult.isFailure) {
      return Result.fail(propsResult.getErrorValue());
    }

    if (!props.hashed) {
      const passwordMinLength = Guard.againstAtLeast(
        this.minLength,
        props.value
      );
      if (passwordMinLength.isFailure) {
        return Result.fail(passwordMinLength.getErrorValue());
      }
    }

    return Result.ok(new UserPassword({ ...props, hashed: !!props.hashed }));
  }
}
