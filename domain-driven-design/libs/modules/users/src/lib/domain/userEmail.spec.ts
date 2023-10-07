import { Result } from '@core';
import { UserEmail } from './userEmail';

let email: UserEmail;
let emailOrError: Result<UserEmail>;

test('should be able to create a valid email', () => {
  emailOrError = UserEmail.create('test@gmail.com');
  expect(emailOrError.isSuccess).toBe(true);
  email = emailOrError.getValue();
  expect(email.value).toBe('test@gmail.com');
});

test('should fail to create an invalid email', () => {
  emailOrError = UserEmail.create('not_valid');
  expect(emailOrError.isSuccess).toBe(false);
});
