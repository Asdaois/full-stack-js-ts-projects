import { Result } from '@core';
import { UserPassword } from './UserPassword';

let userPassword: UserPassword;
let userPasswordOrError: Result<UserPassword>;

test('should create a basic password', () => {
  userPasswordOrError = UserPassword.create({ value: 'password' });
  expect(userPasswordOrError.isSuccess).toBe(true);

  userPassword = userPasswordOrError.getValue();
  expect(userPassword.value).toBe('password');
});
