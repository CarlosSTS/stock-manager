const express = require('express');
const routes = express.Router();

const { eAdmin } = require('../middlewares/auth');

const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const sessionController = require('../controllers/sessionController')
const stockController = require('../controllers/stockController')
 
routes.post('/product', eAdmin, productController.create)
routes.get('/product', eAdmin, productController.index)
routes.get('/product/:id', eAdmin, productController.show)
routes.put('/product', eAdmin, productController.edit)
routes.delete('/product/:id', eAdmin, productController.delete)

routes.post('/user', eAdmin, userController.create)
routes.get('/user', eAdmin, userController.index)
routes.get('/user/:id', eAdmin, userController.show)
routes.put('/user', eAdmin, userController.edit)
routes.delete('/user/:id', eAdmin, userController.delete)

routes.post('/session', sessionController.create)
routes.get('/me', eAdmin, sessionController.show)

routes.get('/product/amount/larger', stockController.index)
routes.get('/product/amount/smaller', stockController.smaller)

module.exports = routes;