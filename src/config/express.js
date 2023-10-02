const express = require('express');
const app = express();
const routes = require('../app/routes')
const bodyParser = require('body-parser');
cors = require('cors')
const allowedOrigin = 'https://www.digitalindustry.com.br'; 

const corsOptions = {
  origin: (origin, callback) => {
    if (origin === allowedOrigin || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acesso não permitido por CORS'));
    }
  },
};

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors(corsOptions));
//app.use(cors(corsOptions))
//acessando as rotas declaradas.
app.use('/', routes)

module.exports = app;