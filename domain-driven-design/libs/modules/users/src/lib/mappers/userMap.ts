import { Mapper } from '@infra';
import { UniqueEntityID } from '@domain';
import { User } from '../domain/user';
import { UserDTO } from '../dtos/userDTO';
import { UserEmail } from '../domain/userEmail';
import { UserName } from '../domain/UserName';
import { UserPassword } from '../domain/UserPassword';

type userPersistente = {
  base_user_id: string;
  user_email: string;
  username: string;
  user_password: string;
  is_email_verified: boolean;
  is_admin_user: boolean;
  is_deleted: boolean;
};

export class UserMap implements Mapper<User> {
  public static toDTO(user: User): UserDTO {
    return {
      username: user.username.value,
      isEmailVerified: user.isEmailVerified,
      isAdminUser: user.isAdminUser,
      isDeleted: user.isDeleted,
    };
  }

  public static toDomain(raw: userPersistente): User {
    const userNameOrError = UserName.create({ name: raw.username });
    const userPasswordOrError = UserPassword.create({
      value: raw.user_password,
      hashed: true,
    });
    const userEmailOrError = UserEmail.create(raw.user_email);

    const userOrError = User.create(
      {
        username: userNameOrError.getValue(),
        isAdminUser: raw.is_admin_user,
        isDeleted: raw.is_deleted,
        isEmailVerified: raw.is_email_verified,
        password: userPasswordOrError.getValue(),
        email: userEmailOrError.getValue(),
      },
      new UniqueEntityID(raw.base_user_id)
    );

    if (userOrError.isFailure) {
      console.log(userOrError.error);
      throw new Error('Fail tho convert to domain');
    }

    return userOrError.getValue();
  }

  static async toPersistence(user: User): Promise<userPersistente> {
    return {
      base_user_id: user.userId.id.toString(),
      user_email: user.email.value,
      username: user.username.value,
      user_password: user.password.value,
      is_email_verified: user.isEmailVerified,
      is_admin_user: user.isAdminUser,
      is_deleted: user.isDeleted,
    };
  }
}
