const generatorStringArray = require('./helpers/generatorStringArray');

const apiInfo = {
  hostname: 'https://rickandmortyapi.com',
  characterUri: 'api/character',
  charactersTotal: 826,
  locationUri: 'api/location',
  locationsTotal: 126,
  episodeUri: 'api/episode',
  episodeTotal: 51,
};

const allEpisodePath = `${apiInfo.hostname}/${apiInfo.episodeUri}/${generatorStringArray(apiInfo.episodeTotal)}`;
const allLocationPath = `${apiInfo.hostname}/${apiInfo.locationUri}/${generatorStringArray(apiInfo.locationsTotal)}`;
const allCharactersPath = `${apiInfo.hostname}/${apiInfo.characterUri}/${generatorStringArray(apiInfo.charactersTotal)}`;

module.exports = {
  apiInfo, allEpisodePath, allLocationPath, allCharactersPath,
};
