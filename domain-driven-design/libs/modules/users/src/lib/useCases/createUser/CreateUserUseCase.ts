import {
  AppError,
  failOperation,
  Result,
  successOperation,
  UseCase,
} from '@core';
import { User, UserProps } from '../../domain/user';
import { CreateUserDTO } from './CreateUserDTO';
import { CreateUserErrors } from './CreateUserErrors';
import { CreateUserResponse } from './CreateUserResponse';
import { IUserRepo } from '../../repos/IUserRepo';
import { UserEmail } from '../../domain/userEmail';
import { UserName } from '../../domain/UserName';
import { UserPassword } from '../../domain/UserPassword';

export class CreateUserUseCase
  implements UseCase<CreateUserDTO, CreateUserResponse>
{
  constructor(private userRepo: IUserRepo) {}

  async execute(request: CreateUserDTO): Promise<CreateUserResponse> {
    const emailOrError: Result<UserEmail> = UserEmail.create(request.email);
    const passwordOrError: Result<UserPassword> = UserPassword.create({
      value: request.password,
    });
    const usernameOrError: Result<UserName> = UserName.create({
      name: request.username,
    });

    const dtoResult = Result.combine([
      emailOrError,
      passwordOrError,
      usernameOrError,
    ]);

    if (dtoResult.isFailure) {
      return failOperation(Result.fail<void>(dtoResult.error));
    }

    const newUser: UserProps = {
      email: emailOrError.getValue(),
      username: usernameOrError.getValue(),
      password: passwordOrError.getValue(),
    };

    try {
      const userAlreadyExists = await this.userRepo.exists(newUser.email);

      if (userAlreadyExists) {
        return failOperation(
          new CreateUserErrors.EmailAlreadyExistsError(newUser.email.value)
        );
      }

      const alreadyCreatedUserByUserName = await this.userRepo.getByUserName(
        newUser.username
      );

      if (alreadyCreatedUserByUserName) {
        return failOperation(
          new CreateUserErrors.UsernameTakenError(newUser.username.value)
        );
      }

      const userOrError: Result<User> = User.create(newUser);

      if (userOrError.isFailure) {
        return failOperation(Result.fail<User>(userOrError.error.toString()));
      }

      const user: User = userOrError.getValue();

      await this.userRepo.save(user);

      return successOperation(Result.ok());
    } catch (error) {
      return failOperation(new AppError.UnexpectedError(error as Error));
    }
  }
}
