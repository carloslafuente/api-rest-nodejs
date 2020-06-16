//MODELO O ESQUEMA DE DATOS PARA LA BASE DE DATOS DE MONGOOSE

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
	name: String,
	picture: String,
	price: Number,
	category: { type: String, enum: ['computers', 'phones', 'accesories'] },
	description: String,
});

module.exports = mongoose.model('Product', productSchema);
