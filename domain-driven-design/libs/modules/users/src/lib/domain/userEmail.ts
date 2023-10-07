/* eslint-disable no-useless-escape */
import { Result } from '@core';
import { ValueObject, ValueObjectProps } from '@domain';

export interface UserEmailProps extends ValueObjectProps {
  value: string;
}

export class UserEmail extends ValueObject<UserEmailProps> {
  get value(): string {
    return this.props.value;
  }

  public static create(anEmail: string): Result<UserEmail> {
    if (!this.isValidEmail(anEmail)) {
      return Result.fail<UserEmail>('Email address not valid');
    }

    return Result.ok<UserEmail>(new UserEmail({ value: this.format(anEmail) }));
  }

  static isValidEmail(anEmail: string): boolean {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(anEmail);
  }

  private static format(anEmail: string): string {
    return anEmail.trim().toLowerCase();
  }
}
