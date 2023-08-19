const express = require('express');
const app = express();
const routes = require('../app/routes')
const bodyParser = require('body-parser');
cors = require('cors')
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors())
//acessando as rotas declaradas.
app.use('/', routes)

module.exports = app;