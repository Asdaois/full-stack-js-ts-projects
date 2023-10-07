import { IUserRepo } from '../IUserRepo';
import { User } from '../../domain/user';
import { UserEmail } from '../../domain/userEmail';
import { UserId } from '../../domain/userId';
import { UserMap } from '../../mappers/userMap';
import { UserName } from '../../domain/UserName';
import { SequelizeModels } from '@infra';

export class SequelizeUserRepo implements IUserRepo {
  constructor(private models: SequelizeModels.Models) {

  }

  getByUserName(username: UserName): Promise<User> {
    throw new Error('Method not implemented.');
  }

  getByID(user: UserId): Promise<User> {
    throw new Error('Method not implemented.');
  }

  exists(email: UserEmail): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async save(user: User): Promise<void> {
    const exists = await this.exists(user.email);

    if (!exists) {
      const rawSequelizeUser = await UserMap.toPersistence(user);
      await this.models.BaseUser.create(rawSequelizeUser);
    }
    return;
  }
}
