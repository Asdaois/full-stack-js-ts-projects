import { AggregateRoot, UniqueEntityID } from '@domain';
import { Guard, Result } from '@core';
import { JWTToken, RefreshToken } from './jwt';

import { UserCreated } from './events/userCreated';
import { UserEmail } from './userEmail';
import { UserId } from './userId';
import { UserName } from './UserName';
import { UserPassword } from './UserPassword';

export interface UserProps {
  email: UserEmail;
  username: UserName;
  password: UserPassword;
  isEmailVerified?: boolean;
  isAdminUser?: boolean;
  accessToken?: JWTToken;
  refreshToken?: RefreshToken;
  isDeleted?: boolean;
  lastLogin?: Date;
}

export class User extends AggregateRoot<UserProps> {
  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get userId(): UserId {
    return UserId.create(this._id).getValue();
  }

  get email(): UserEmail {
    return this.props.email;
  }

  get username(): UserName {
    return this.props.username;
  }

  // get accessToken(): string {
  //   return this.props.accessToken;
  // }

  get password(): UserPassword {
    return this.props.password;
  }

  get isDeleted(): boolean {
    return this.props.isDeleted ?? false;
  }

  get isEmailVerified(): boolean {
    return this.props.isEmailVerified ?? false;
  }

  // get lastLogin(): Date {
  //   return this.props.lastLogin;
  // }

  // get refreshToken(): RefreshToken {
  //   return this.props.refreshToken;
  // }

  // public isLoggedIn(): boolean {
  //   return !!this.props.accessToken && !!this.props.refreshToken;
  // }

  // public setAccessToken(token: JWTToken, refreshToken: RefreshToken): void {
  //   this.addDomainEvent(new UserLoggedIn(this));
  //   this.props.accessToken = token;
  //   this.props.refreshToken = refreshToken;
  //   this.props.lastLogin = new Date();
  // }

  // public delete(): void {
  //   if (!this.props.isDeleted) {
  //     this.addDomainEvent(new UserDeleted(this));
  //     this.props.isDeleted = true;
  //   }
  // }

  get isAdminUser(): boolean {
    return this.props.isAdminUser ?? false;
  }

  public static create(props: UserProps, id?: UniqueEntityID): Result<User> {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.username, argumentName: 'username' },
      { argument: props.email, argumentName: 'email' },
    ]);

    if (guardResult.isFailure) {
      return Result.fail(guardResult.getErrorValue());
    }

    const user = new User(
      {
        ...props,
        isDeleted: props.isDeleted ?? false,
        isEmailVerified: props.isEmailVerified ?? false,
        isAdminUser: props.isAdminUser ?? false,
      },
      id
    );

    const isNewUser = !id;
    if (isNewUser) {
      user.addDomainEvent(new UserCreated(user));
    }

    return Result.ok(user);
  }
}
