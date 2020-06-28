//CONFIGURACION DEL SERVIDOR DE NODEJS CON EXPRESS del archivo app,
//CON MONGOOSE Y CON LA CONEXION A BASE DE DATOS del archivo config

'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(config.db, (err, res) => {
  if (err) {
    console.log(`connection failed due to: ${err}`);
  } else {
    console.log('connection successful');

    app.listen(process.env.PORT || 3000, () => {
      console.log(`API rest running on port: ${config.port}`);
    });
  }
});
