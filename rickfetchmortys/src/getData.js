const { allLocationPath, allCharactersPath, allEpisodePath } = require('./apiInfo');

const { get } = require('./helpers/httpRequest');

const getData = () => {
  const result = Promise.all(
    [get(allLocationPath), get(allCharactersPath), get(allEpisodePath)],
  );
  return result;
};

module.exports = getData;
