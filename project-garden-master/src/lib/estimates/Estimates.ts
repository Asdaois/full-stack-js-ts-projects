export type Estimate = number;

export interface Estimates {
  optimistic: Estimate;
  nominal: Estimate;
  pessimistic: Estimate;
}

export interface EstimatesPERT {
  expected: Estimate;
  uncertain: Estimate;
}

const defaultEstimates: Estimates = {
  nominal: 0,
  optimistic: 0,
  pessimistic: 0,
};

type estimateKey = "NOMINAL" | "OPTIMISTIC" | "PESSIMISTIC";

export class EstimatesData implements Estimates {
  private _nominal = 0;
  private _optimistic = 0;
  private _pessimistic = 0;

  constructor(someEstimates: Estimates) {
    this._nominal = someEstimates.nominal;
    this._optimistic = someEstimates.optimistic;
    this._pessimistic = someEstimates.pessimistic;
  }
  // define getters for the properties
  public get nominal(): Estimate {
    return this._nominal;
  }
  public get optimistic(): Estimate {
    return this._optimistic;
  }
  public get pessimistic(): Estimate {
    return this._pessimistic;
  }

  public updatePropertyAndReturnCopy(property: string, value: number) {
    const result = this.copy();
    result.update(property, value);

    return result;
  }

  public copy() {
    return new EstimatesData({
      nominal: this.nominal,
      optimistic: this.optimistic,
      pessimistic: this.pessimistic,
    });
  }

  /**
   * update a property of the estimate
   * @warning this method is not immutable
   */
  private update(property: string, value: number) {
    switch (formatKey()) {
      case "NOMINAL":
        this._nominal = value;
        break;
      case "OPTIMISTIC":
        this._optimistic = value;
        break;
      case "PESSIMISTIC":
        this._pessimistic = value;
        break;
      default:
        throw new Error("Invalid property");
    }

    function formatKey(): estimateKey {
      const formattedKey = property.toUpperCase();
      return formattedKey as estimateKey;
    }
  }
}

export function getDefaultEStimates(): Estimates {
  return Object.assign({}, defaultEstimates);
}
