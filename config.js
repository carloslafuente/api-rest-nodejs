//CONFIGURACION DE LA CONEXION A LA BASE DE DATOS Y EL PUERTO
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://localhost:27017/the-bolivian-guy',
  SECRET_TOKEN: 'miclavedetokens',
};
