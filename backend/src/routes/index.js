const express = require('express');
const routes = express.Router();

const productController = require('../controllers/productController')

routes.post('/product', productController.create)
routes.get('/product', productController.index)
routes.get('/product/:id', productController.show)
routes.put('/product', productController.edit)
routes.delete('/product/:id', productController.delete)

module.exports = routes;