import mongoose from 'mongoose';
import config from './config.js';
import logger from './utils/logger.js';

const connectToDatabase = () => {
  mongoose.connect(config.MONGODB_URI);

  const db = mongoose.connection;

  db.on('error', logger.error.bind(console, 'connection error: '));
  db.once('open', () => {
    logger.info('Connected successfully to database');
  });
};

export default connectToDatabase;
