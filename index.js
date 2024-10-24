const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routes = require('./src/routes/routes');

// iniciando a aplicação, dizendo que vou trabalhar com dados no formato json
app.use(express.json());

// Passando a rota(url) base do sistema
app.use('/sistema', routes);

// Tratamento de erros
app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found");
});

// Tratamento de erros
app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});

// Sincornização do sequelize com a definição da porta e do servidor
// force se eu deixo como true, toda vez que eu iniciar o sistema, ele apagará as tabelas e registros
sequelize.sync({ force: false }).then ( () => {
    const port = 3003;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
});