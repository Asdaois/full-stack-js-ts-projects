import { IDomainEvent } from './IDomainEvent';
import { AggregateRoot } from '../AggregateRoot';
import { UniqueEntityID } from '../UniqueEntityID';

export type DomainEventHandler = (domainEvent: IDomainEvent) => void;

export class DomainEvents {
  private static handlersMap: Map<string, Array<DomainEventHandler>> =
    new Map();
  private static markedAggregates: AggregateRoot<unknown>[] = [];

  /**
   * @method markAggregateForDispatch
   * @static
   * @desc Called by aggregate root objects that have created domain
   * events to eventually be dispatched when the infrastructure commits
   * the unit of work.
   */

  public static markAggregateForDispatch(
    aggregate: AggregateRoot<unknown>
  ): void {
    const aggregateFound = !!this.findMarkedAggregateByID(aggregate.id);

    if (!aggregateFound) {
      this.markedAggregates.push(aggregate);
    }
  }

  /**
   * @method dispatchEventsForAggregate
   * @static
   * @desc When all we know is the ID of the aggregate, call this
   * in order to dispatch any handlers subscribed to events on the
   * aggregate.
   */
  public static dispatchEventsForAggregate(id: UniqueEntityID): void {
    const aggregate = this.findMarkedAggregateByID(id);

    if (aggregate) {
      this.dispatchAggregateEvents(aggregate);
      aggregate.clearEvents();
      this.removeAggregateFromMarkedDispatchList(aggregate);
    }
  }

  public static register(
    callback: DomainEventHandler,
    eventClassName: string
  ): void {
    if (!this.handlersMap.has(eventClassName)) {
      // guarantee is not undefined with this line
      this.handlersMap.set(eventClassName, []);
    }

    this.handlersMap.get(eventClassName)?.push(callback);
  }

  public static clearHandlers(): void {
    this.handlersMap.clear();
  }

  public static clearMarkedAggregates(): void {
    this.markedAggregates = [];
  }

  /**
   * @method dispatchAggregateEvents
   * @static
   * @desc Call all of the handlers for any domain events on this aggregate.
   */
  private static dispatchAggregateEvents(
    aggregate: AggregateRoot<unknown>
  ): void {
    aggregate.domainEvents.forEach((event: IDomainEvent) =>
      this.dispatch(event)
    );
  }

  /**
   * @method removeAggregateFromMarkedDispatchList
   * @static
   * @desc Removes an aggregate from the marked list.
   */
  private static removeAggregateFromMarkedDispatchList(
    aggregate: AggregateRoot<unknown>
  ): void {
    const index = this.markedAggregates.findIndex((a) => a.equals(aggregate));
    this.markedAggregates.splice(index, 1);
  }

  /**
   * @method findMarkedAggregateByID
   * @static
   * @desc Finds an aggregate within the list of marked aggregates.
   */
  private static findMarkedAggregateByID(
    id: UniqueEntityID
  ): AggregateRoot<unknown> | null {
    let found: AggregateRoot<unknown> | null = null;

    for (const aggregate of this.markedAggregates) {
      if (aggregate.id.equals(id)) {
        found = aggregate;
      }
    }

    return found;
  }

  private static dispatch(event: IDomainEvent): void {
    const eventClassName: string = event.constructor.name;

    if (this.handlersMap.has(eventClassName)) {
      const handlers = this.handlersMap.get(eventClassName);
      if (handlers !== undefined)
        for (const handler of handlers) {
          handler(event);
        }
    }
  }
}
