const fs = require('fs');
const CharCounter = require('./exercises/CharCounter');
const EpisodeLocations = require('./exercises/EpisodeLocations');
const withDuration = require('./helpers/withDuration');

const app = async () => {
  const results = [];

  let result = await withDuration(CharCounter);
  results.push(result);

  result = await withDuration(EpisodeLocations);
  results.push(result);

  const resultsJson = JSON.stringify(results);
  fs.writeFileSync('results.json', resultsJson);
};
app();
