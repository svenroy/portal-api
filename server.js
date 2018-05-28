import chalk from 'chalk';
import morgan from 'morgan';
import express from 'express';
import app from './api';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const debug = require('debug')('app');

const port = process.env.PORT || 3000;

const server = express();

server.use(morgan('tiny'));

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.configureControllers(server);

server.listen(port, () => {
  debug(`listening at ${chalk.green(port)}`);
});

module.exports = server;
