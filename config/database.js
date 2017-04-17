var Sequelize = require('sequelize');
var configs = require('../config');

var onHeroku = !!process.env.DYNO;

//DWH Connection
var sequelize = onHeroku ?
  new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    }
  }) :
  new Sequelize(configs.dbName, configs.dbUser, configs.dbPass, {
    host: configs.dbHost,
    port: configs.dbPort,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  });

module.exports = sequelize;