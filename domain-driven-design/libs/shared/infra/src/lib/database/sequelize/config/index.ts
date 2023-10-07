import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

type DatabaseEnv = {
  DB_USER: string;
  DB_PASS: string;
  DB_HOST: string;
  DB_DEV_DB_NAME: string;
  DB_TEST_DB_NAME: string;
  DB_PROD_DB_NAME: string;
  NODE_ENV: string;
  FORUM_IS_PRODUCTION: string;
  CLEARDB_DATABASE_URL: string;
};
const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_DEV_DB_NAME,
  DB_TEST_DB_NAME,
  DB_PROD_DB_NAME,
  NODE_ENV,
  FORUM_IS_PRODUCTION,
  CLEARDB_DATABASE_URL,
}: DatabaseEnv = process.env as DatabaseEnv;

interface DBInfo {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: 'mysql';
}

const databaseCredentials: Record<string, DBInfo> = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_DEV_DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_TEST_DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_PROD_DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
} as const;

export const { username, password, database, host, dialect } =
  databaseCredentials[NODE_ENV];

const mode = FORUM_IS_PRODUCTION === 'true' ? 'prod' : 'dev';

console.log(`[DB]: Connecting to the database in ${mode} mode.`);

export const connection =
  FORUM_IS_PRODUCTION === 'true'
    ? new Sequelize(CLEARDB_DATABASE_URL)
    : new Sequelize(database, username, password, {
        host,
        dialect,
        port: 3306,
        dialectOptions: {
          multipleStatements: true,
        },
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        logging: false,
      });
