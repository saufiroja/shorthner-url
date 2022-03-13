require('dotenv').config();

const { DB_NAME, DB_PORT, DB_HOST, DB_USER, DB_PASS } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    port: parseInt(DB_PORT),
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    port: parseInt(DB_PORT),
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    port: parseInt(DB_PORT),
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: true,
    },
  },
};
