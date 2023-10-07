import http from 'http';
import app from './app.js';
import config from './config.js';
import logger from './utils/logger.js';

const server = http.createServer(app);
server.listen(config.PORT, () => {
  logger.info(`Server runnig on port ${config.PORT}`);
});
