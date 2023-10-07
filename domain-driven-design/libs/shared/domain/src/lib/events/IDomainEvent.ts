import { UniqueEntityID } from '../UniqueEntityID';

export interface IDomainEvent {
  dateTimeOcurred: Date;

  getAggregateId(): UniqueEntityID;
}
