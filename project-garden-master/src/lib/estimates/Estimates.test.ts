import { Estimates, EstimatesData, getDefaultEStimates } from "./Estimates";

const defaultEstimates: Estimates = {
  nominal: 0,
  optimistic: 0,
  pessimistic: 0,
};

test("get default Estimates", () => {
  expect(getDefaultEStimates()).toEqual(defaultEstimates);
});

test("default EStimates are not modified when the object is changed", () => {
  const estimates = getDefaultEStimates();
  estimates.nominal = 4;
  estimates.pessimistic = 6;
  expect(estimates).not.toEqual(getDefaultEStimates());
});

test("class EstimateData exist", () => {
  expect(EstimatesData).toBeDefined();
});

test("get copy of a estimate and check inmutability", () => {
  const estimates = new EstimatesData(getDefaultEStimates());
  const copy = estimates.copy();
  copy.updatePropertyAndReturnCopy("NOMINAL", 4);
  expect(estimates.copy()).toEqual(copy);
});
