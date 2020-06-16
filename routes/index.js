//CONFIGURACION DE LOS METODOS HTTP

'use strict'

const express = require('express');
const api = express.Router();
const productController = require('../controllers/product');

api.get('/product', productController.getProducts);
api.get('/product/:productId', productController.getProduct);
api.post('/product', productController.postProduct);
api.put('/product/:productId', productController.putProduct);
api.delete('/product/:productId', productController.deleteProduct);

module.exports = api;
