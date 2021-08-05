const Sequelize = require('sequelize');

const db = require('./db');

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  purchasePrice: {
    type: Sequelize.DOUBLE,
  },
  salePrice: {
    type: Sequelize.DOUBLE,
  },
  amount: {
    type: Sequelize.INTEGER,
  }
});

//Product.sync({alter: true});

module.exports = Product;