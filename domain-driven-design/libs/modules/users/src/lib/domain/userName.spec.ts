import { Result } from '@core';
import { UserName } from './UserName';

let userName: UserName;
let userNameOrError: Result<UserName>;

test('should create a basic username', () => {
  userNameOrError = UserName.create({ name: 'username' });
  expect(userNameOrError.isSuccess).toBe(true);

  userName = userNameOrError.getValue();
  expect(userName.value).toBe('username');
});

test('should fail if user name is to short', () => {
  userNameOrError = UserName.create({ name: 'us' });
  expect(userNameOrError.isFailure).toBe(true);

  expect(userNameOrError.getErrorValue()).toBe(
    `Text is not at least ${UserName.minLength} chars.`
  );
});

test('should fail if user name is to long', () => {
  userNameOrError = UserName.create({
    name: 'thisusernameistolongfortheusername',
  });
  expect(userNameOrError.isFailure).toBe(true);

  expect(userNameOrError.getErrorValue()).toBe(
    `Text is greater than ${UserName.maxLength} chars.`
  );
});
