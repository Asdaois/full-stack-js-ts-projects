import { User } from './user';
import { UserEmail } from './userEmail';
import { UserName } from './UserName';
import { UserPassword } from './UserPassword';

test('should create user', () => {
  const userOrError = User.create({
    username: UserName.create({ name: 'pepito' }).getValue(),
    password: UserPassword.create({ value: 'posswordislong' }).getValue(),
    email: UserEmail.create('email@gmail.com').getValue(),
  });

  expect(userOrError.isSuccess).toBeTruthy();
});
