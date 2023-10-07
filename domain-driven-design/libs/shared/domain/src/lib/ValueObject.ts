export type ValueObjectProps = Record<string, unknown>;

/**
 * @description ValueObjects are objects that we determine their
 * equality through their structural property.
 */
export abstract class ValueObject<T extends ValueObjectProps> {
  public props: T;

  constructor(props: T) {
    this.props = {
      ...props,
    };
  }

  public equals(another?: ValueObject<T>): boolean {
    if (another === null || another === undefined) {
      return false;
    }

    return JSON.stringify(this.props) === JSON.stringify(another.props);
  }
}
