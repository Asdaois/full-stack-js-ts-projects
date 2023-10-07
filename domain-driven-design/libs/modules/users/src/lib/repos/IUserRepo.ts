import { User } from '../domain/user';
import { UserEmail } from '../domain/userEmail';
import { UserId } from '../domain/userId';
import { UserName } from '../domain/UserName';

export interface IUserRepo {
  getByUserName(username: UserName): Promise<User>;

  getByID(user: UserId): Promise<User>;

  exists(email: UserEmail): Promise<boolean>;

  save(user: User): Promise<void>;
}
