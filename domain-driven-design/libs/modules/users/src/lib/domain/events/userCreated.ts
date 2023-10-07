import { IDomainEvent, UniqueEntityID } from '@domain';
import { User } from '../user';

export class UserCreated implements IDomainEvent {
  public dateTimeOcurred: Date;
  public user: User;

  constructor(anUser: User) {
    this.dateTimeOcurred = new Date();
    this.user = anUser;
  }

  getAggregateId(): UniqueEntityID {
    return this.user.id;
  }
}
