import { UniqueEntityID } from './UniqueEntityID';

const isEntity = (v: unknown): v is Entity<unknown> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  public readonly props: T;
  protected readonly _id: UniqueEntityID;

  constructor(props: T, id?: UniqueEntityID) {
    this._id = id ? id : new UniqueEntityID();
    this.props = props;
  }

  public equals(other?: Entity<T>): boolean {
    if (other == null || other == undefined) {
      return false;
    }

    if (this === other) {
      return true;
    }

    if (!isEntity(other)) {
      return false;
    }

    return this._id.equals(other?._id);
  }
}
