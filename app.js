//CONFIGURACION DEL SERVIDOR DE EXPRESS CON BODYPASER QUE USA LAS RUTAS DE LOS METODOS HTTP EN api

'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;
