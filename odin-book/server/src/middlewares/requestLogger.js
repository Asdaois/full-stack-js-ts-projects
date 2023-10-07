import logger from '../utils/logger.js';

/**
 * Show the message of request, prefer this instead of morgan for development
 * @param {import("express").Request} request
 */
const requestLogger = (request, _respones, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:', request.path);
  logger.info('Body:', request.body);
  logger.info('---');
  next();
};

export default requestLogger;
