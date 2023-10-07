const withDuration = require('./withDuration');

test('duration is greater than 3 seconds', async () => {
  const callback = async () => {
    await new Promise((r) => setTimeout(r, 3510));
  };
  const result = await withDuration(callback);

  expect(result.duration).toBeGreaterThan(3500);
});

test('time to contain 3s', async () => {
  const callback = async () => {
    await new Promise((r) => setTimeout(r, 3510));
  };
  const result = await withDuration(callback);
  expect(result.time).toMatch(/3s/);
  expect(result.time).toMatch(/ms/);
});
