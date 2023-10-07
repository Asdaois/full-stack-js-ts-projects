import { Estimates, EstimatesPERT } from "../estimates/Estimates";

import { EstimateCalculator } from "./EstimateCalculator";

const baseEstimates: Estimates = {
  optimistic: 1,
  nominal: 3,
  pessimistic: 12,
};

const estimatesPERT: Estimates & EstimatesPERT = {
  ...baseEstimates,
  expected: 4.2,
  uncertain: 1.8,
};

test("create calculator using numbers", () => {
  const estimator = new EstimateCalculator(1, 3, 12);
  const estimates = estimator.Estimates;

  expect(estimates).toEqual({ optimistic: 1, nominal: 3, pessimistic: 12 });
});

test("Create calculator using a data Estimates", () => {
  const estimator = new EstimateCalculator(baseEstimates);

  expect(estimator.Estimates).toEqual(baseEstimates);
});

test("correct estimated of expected duration", () => {
  expect(new EstimateCalculator(baseEstimates).ExpectDuration).toBe(
    estimatesPERT.expected
  );
});

test("correct estimated of uncertain duration", () => {
  expect(new EstimateCalculator(baseEstimates).UncertainDuration).toBe(
    estimatesPERT.uncertain
  );
});

test("return all estimated calculated", () => {
  const estimator = new EstimateCalculator(baseEstimates);
  const estimates = estimator.EstimatesPERT;

  expect(estimates).toEqual(estimatesPERT);
});
