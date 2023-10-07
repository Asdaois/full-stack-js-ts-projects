import { IDomainEvent } from './IDomainEvent';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface IHandle<T extends IDomainEvent> {
  setupSubscriptions(): void;
}
