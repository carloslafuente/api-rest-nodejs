//CONFIGURACION DE LOS METODOS HTTP QUE COMPONEN LA API, UTILIZANDO EL ESQUEMA del archivo models

'use strict';

const Product = require('../models/product');

function getProduct(req, res) {
	let productId = req.params.productId;
	Product.findById(productId, (err, product) => {
		if (err)
			return res.status(500).send({
				message: `The product was not found, error description: ${err}`,
			});
		if (!product)
			return res.status(404).send({ message: 'The product does not exist' });

		res.status(200).send({ product: product });
	});
}

function getProducts(req, res) {
	Product.find({}, (err, products) => {
		if (err)
			return res.status(500).send({
				message: `The product was not found, error description: ${err}`,
			});
		if (!products)
			return res.status(404).send({ message: 'There is no products yet' });

		res.status(200).send({ products: products });
	});
}

function postProduct(req, res) {
	let product = new Product();
	product.name = req.body.name;
	product.picture = req.body.picture;
	product.price = req.body.price;
	product.category = req.body.category;
	product.description = req.body.description;

	product.save((err, productStored) => {
		if (err)
			return res
				.status(500)
				.send(`Error trying to save the product, error description: ${err}`);

		res.status(200).send({ product: productStored });
	});
}

function putProduct(req, res) {
	let productId = req.params.productId;
	let body = req.body;

	Product.findByIdAndUpdate(productId, body, (err, productUpdated) => {
		if (err)
			return res
				.status(500)
				.send(`Error trying to update the product, error description: ${err}`);

		res.status(200).send({ product: productUpdated });
	});
}

function deleteProduct(req, res) {
	let productId = req.params.productId;
	Product.findByIdAndDelete(productId, (err, product) => {
		if (err)
			return res.status(500).send({
				message: `The product was not found, error description: ${err}`,
			});
		if (!product)
			return res.status(404).send({ message: 'The product does not exist' });

		res.status(200).send({ message: 'The product was deteled successfully' });
	});
}

module.exports = {
	getProduct,
	getProducts,
	postProduct,
	putProduct,
	deleteProduct,
};
