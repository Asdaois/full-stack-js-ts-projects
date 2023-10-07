const NeDB = require("nedb");
const db = new NeDB({
  filename: "./db/messages.db",
  autoload: true,
});

module.exports.db = db;