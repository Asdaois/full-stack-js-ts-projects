const generatorStringArray = require('./generatorStringArray');

test('generate the string 1,2,3,4', () => {
  const result = generatorStringArray(5);

  expect(result).toMatch(/1,2,3,4/);
});


test('generate the string 1,2,3,4,5,6,7,8', () => {
  const result = generatorStringArray(9);

  expect(result).toMatch(/1,2,3,4,5,6,7,8/);
});
