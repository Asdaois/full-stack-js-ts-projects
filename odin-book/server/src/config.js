import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV } = process.env;

let MONGODB_URI;
if (NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
} else if (NODE_ENV === 'production') {
  MONGODB_URI = process.env.MONGODB_URI;
} else {
  MONGODB_URI = 'mongodb://127.0.0.1:27017/odin-book';
}

const PORT = process.env.PORT ?? 3001;

export default {
  MONGODB_URI,
  PORT,
};
