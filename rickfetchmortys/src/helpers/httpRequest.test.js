const httpRequest = require('./httpRequest');
const { apiInfo } = require('../apiInfo');
const generatorStringArray = require('./generatorStringArray');

test('can make get request', async () => {
  const data = await httpRequest.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(data.userId).toBe(1);
});

test('can make get request to the rickandmortyapi', async () => {
  const data = await httpRequest.get(`${apiInfo.hostname}/api`);

  expect(data.characters).not.toBeNull();
  expect(data.locations).not.toBeNull();
  expect(data.episodes).not.toBeNull();
});

test('get all episodes', async () => {
  const path = `${apiInfo.episodeUri}/${generatorStringArray(apiInfo.episodeTotal)}`;

  const data = await httpRequest.get(`${apiInfo.hostname}/${path}`);

  expect(data.length).toBe(apiInfo.episodeTotal);
});

test('get all locations', async () => {
  const path = `${apiInfo.locationUri}/${generatorStringArray(apiInfo.locationsTotal)}`;

  const data = await httpRequest.get(`${apiInfo.hostname}/${path}`);

  expect(data.length).toBe(apiInfo.locationsTotal);
});

test('get all characters', async () => {
  const path = `${apiInfo.characterUri}/${generatorStringArray(apiInfo.charactersTotal)}`;

  const data = await httpRequest.get(`${apiInfo.hostname}/${path}`);

  expect(data.length).toBe(apiInfo.charactersTotal);
});
