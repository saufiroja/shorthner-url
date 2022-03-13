const { Sequelize } = require('sequelize');

const { DB_NAME, DB_PORT, DB_HOST, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  dialect: 'postgres',
  logging: false,
  timezone: '+08:00',
  pool: {
    max: 5,
    min: 0,
    acquire: 36000,
    idle: 10000,
  },
});

module.exports = sequelize;
