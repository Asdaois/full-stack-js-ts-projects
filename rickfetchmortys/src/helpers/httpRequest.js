const https = require('https');

const get = (url) => new Promise((resolve) => {
  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const json = JSON.parse(data);
      resolve(json);
    });
  }).end();
});

module.exports = { get };
