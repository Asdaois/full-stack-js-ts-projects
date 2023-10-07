import { Estimate, Estimates, EstimatesPERT } from "../estimates/Estimates";

export class EstimateCalculator {
  private optimistic: Estimate = 0;
  private nominal: Estimate = 0;
  private pessimistic: Estimate = 0;

  public constructor(
    optimistic: Estimate,
    nominal: Estimate,
    pessimistic: Estimate
  );
  public constructor(estimates: Estimates);

  public constructor(...estimates: any[]) {
    if (estimates.length === 3) {
      this.optimistic = estimates[0];
      this.nominal = estimates[1];
      this.pessimistic = estimates[2];
      return;
    }

    if (estimates.length === 1) {
      if (typeof estimates[0] == "number") {
        throw new Error("Invalid parameter");
      }
      const estimatesPERT = estimates[0] as Estimates;

      this.optimistic = estimatesPERT.optimistic;
      this.nominal = estimatesPERT.nominal;
      this.pessimistic = estimatesPERT.pessimistic;
      return;
    }

    throw new Error(
      "Invalid number of arguments or Constructor is not implemented"
    );
  }

  public get Estimates(): Estimates {
    return {
      optimistic: this.optimistic,
      nominal: this.nominal,
      pessimistic: this.pessimistic,
    };
  }

  public get EstimatesPERT(): EstimatesPERT & Estimates {
    return {
      ...this.Estimates,
      expected: this.ExpectDuration,
      uncertain: this.UncertainDuration,
    };
  }

  /**
   * Calculate expected duration using PERT formula (O + 4N + P) / 6
   */
  public get ExpectDuration(): Estimate {
    let result = (this.optimistic + 4 * this.nominal + this.pessimistic) / 6;
    result = this.round(result);
    return result;
  }
  /**
   * Calculate uncertain duration using PERT formula (P - O) / 6
   */
  public get UncertainDuration() {
    let result = (this.pessimistic - this.optimistic) / 6;
    result = this.round(result);
    return result;
  }

  /**
   * Round a float value to a number of decimal places
   * @param value float value to round
   * @param precision number of decimal places default 1
   * @returns number formatted
   */
  private round(value: number, precision = 1): number {
    const multiplier = Math.pow(10, precision);
    return Math.round(multiplier * value) / multiplier;
  }
}
