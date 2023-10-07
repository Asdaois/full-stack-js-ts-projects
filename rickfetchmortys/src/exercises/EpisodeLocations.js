const getData = require('../getData');
const { extractIndexFromUrl } = require('../helpers/extractIndexFromUrl');

const EpisodeLocations = async () => {
  const [, allCharacters, episodes] = await getData();

  const results = episodes.map((episode) => {
    const locations = new Set();

    episode.characters.forEach((characterUrl) => {
      const characterSchema = allCharacters[extractIndexFromUrl(characterUrl)];
      locations.add(characterSchema.origin.name);
    });

    return { name: episode.name, episode: episode.episode, locations: Array.from(locations) };
  });

  return { exerciseName: 'Episode Locations', results };
};

module.exports = EpisodeLocations;
