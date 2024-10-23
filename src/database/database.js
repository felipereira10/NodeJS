const Sequelize = require('sequelize');

// Dizendo que usaremos o ambiente em modo de desenvolvimento
const environment = process.env.NODE_ENV || 'development';
// Mostrando que minhas info do BD estão no config
const config = require ('../config/config')[environment];

// Criando uma nova conexão com o sequelize
const sequelize = new Sequelize (
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }

);

module.exports = sequelize;