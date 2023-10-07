import { Result } from '@core';
import { Entity, UniqueEntityID } from '@domain';

export class UserId extends Entity<null> {
  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  public static create(id?: UniqueEntityID): Result<UserId> {
    return Result.ok(new UserId(id));
  }
}
