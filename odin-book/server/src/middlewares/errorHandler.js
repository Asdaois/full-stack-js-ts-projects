import logger from '../utils/logger.js';

const errorHandler = (error, _request, response, next) => {
  logger.error('Error: ', error._message ?? error.message);
  logger.error(error.message);
  logger.error('---');

  let status = error.status || 200;

  if (
    error.name === 'CastError'
    || error.name === 'ValidationError'
    || error.name === 'TypeError'
  ) {
    status = 400;
  } else if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
    status = 401;
  } else if (error.name === 'MongoServerError') {
    status = 500;
  }

  if (status !== 200) {
    return response
      .status(status)
      .send({ error: error.name, message: error.message });
  }

  return next(error);
};

export default errorHandler;
