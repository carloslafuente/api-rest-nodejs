'use strict';

const services = require('../services/index');

function isAuth(req, res, next) {
	if (!req.headers.authorization) {
		return res.status(403).send({ message: 'No tienes autorizacion' });
	}
	const token = req.headers.authorization.split(' ')[1];

	services
		.decodeToken(token)
		.then((result) => {
			req.user = result;
			next();
		})
		.catch((err) => {
			res.status(err.status);
		});
}

module.exports = isAuth;
