'use strict';

const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');

const dbConfig = require(`../config/db.config.js`);
const basename = path.basename(__filename);
const db = {};

let sequelize;


/* sequelize = new Sequelize(dbCofig.DB, dbConfig.USER,
    
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operationsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }); */

    sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
        {
            host: dbConfig.HOST,
            dialect: dbConfig.dialect,
            operationsAliases: false,
            pool: {
                max: dbConfig.pool.max,
                min: dbConfig.pool.min,
                acquire: dbConfig.pool.acquire,
                idle: dbConfig.pool.idle
            }
        }
    );
    
    fs
      .readdirSync(__dirname)
      .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
      .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
      });
    
    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });
    sequelize.sync({ alter: true,logging: true })

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    
    module.exports = db;

    module.exports = db;