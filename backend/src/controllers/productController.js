const Product = require('../models/products');

module.exports = {

  async create(request, response) {
    const { name, amount, purchasePrice, salePrice } = request.body
    await Product.create({
      name,
      amount,
      purchasePrice,
      salePrice
    }).then((product) => {
      return response.json({
        error: false,
        product
      });
    }).catch(() => {
      return response.status(400).json({
        error: true,
        message: 'Products not created'
      })
    })
  },

  async index(request, response) {
    await Product.findAll({
      attributes: ['id', 'name', 'purchasePrice', 'salePrice', 'amount'],
      order: [['id', 'DESC']]
    })
      .then((product) => {
        return response.json({
          error: false,
          product
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'Products not exists'
        })
      })
  },

  async show(request, response) {
    const { id } = request.params;

    await Product.findByPk(id)
      .then((product) => {
        return response.json({
          error: false,
          product
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'Product not found'
        })
      })
  },

  async edit(request, response) {
    const { id } = request.body;

    await Product.update(request.body, {
      where: { id }
    })
      .then(() => {
        return response.json({
          error: false,
          message: 'Product edited successfully!'
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'Unedited product'
        })
      })
  },

  async delete(request, response) {
    const { id } = request.params;

    await Product.destroy({
      where: { id }
    })
      .then(() => {
        return response.json({
          error: false,
          message: 'Successfully deleted product!'
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'Product not deleted'
        })
      })
  },

};