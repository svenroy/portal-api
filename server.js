process.env.NODE_ENV = 'development';

import chalk from 'chalk';
import morgan from 'morgan';
import express from 'express';
import { controllers } from './api';
import config from './config';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const debug = require('debug')('app');

console.log(config);

const server = express();

server.use(morgan('tiny'));

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
controllers.configure(server);

server.listen(config.port, () => {
  debug(`listening at ${chalk.green(config.port)}`);
});

module.exports = server;
