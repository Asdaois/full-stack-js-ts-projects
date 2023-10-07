const getData = require('../getData');
const countChar = require('../helpers/countCharacters');

const calculateCharOccurrance = (arr, char) => {
  const reducer = (acum, current) => acum + countChar(char, current.name);

  const result = arr.reduce(
    reducer,
    0,
  );

  return result;
};

const generateResult = ({ resource, char, data }) => {
  const charCounter = calculateCharOccurrance(data, char);
  return { char, count: charCounter, resource };
};

const CharCounter = async () => {
  const [locations, characters, episodes] = await getData();

  const locationResult = generateResult({ char: 'l', data: locations, resource: 'location' });

  const episodesResult = generateResult({ char: 'e', data: episodes, resource: 'episode' });

  const charactersResult = generateResult({ char: 'c', data: characters, resource: 'character' });

  return {
    exerciseName: 'Char counter',
    results: [locationResult, episodesResult, charactersResult],
  };
};

module.exports = CharCounter;
