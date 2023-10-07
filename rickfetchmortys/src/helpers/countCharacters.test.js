const countCharacters = require('./countCharacters');

test('There are 4 \'a\' in string \'abnoteateouaeua\'', () => {
  const result = countCharacters('a', 'abnoteateouaeua');

  expect(result).toBe(4);
});

test('There are 0 \'z\' in string \'abnoteateouaeua\'', () => {
  const result = countCharacters('z', 'abnoteateouaeua');

  expect(result).toBe(0);
});

test('There are 2 \'Z\' UPPERCASE in string \'abZoteateZaeua\'', () => {
  const result = countCharacters('z', 'abZoteateZaeua');

  expect(result).toBe(2);
});

test('There are 4 \'a\' mixed lower and upper case in string \'AbnoteateouaeuA\'', () => {
  const result = countCharacters('a', 'abnoteateouaeua');

  expect(result).toBe(4);
});
