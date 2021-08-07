const Product = require('../models/Products');

module.exports = {
  async index(request, response) {
    await Product.findAll({
      attributes: ['id', 'name', 'amount'],
      order: [['amount', 'DESC']],
      limit: 10
    })
      .then((product) => {
        return response.json({
          error: false,
          product
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'Products not found'
        })
      })
  },
  async smaller(request, response) {
    await Product.findAll({
      attributes: ['id', 'name', 'amount'],
      order: [['amount', 'ASC']],
      limit: 10
    })
      .then((product) => {
        return response.json({
          error: false,
          product
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'Products not found'
        })
      })
  },

};