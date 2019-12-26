import express, { Application } from "express";
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import cors from 'cors';
import helmet from 'helmet';

import routes from './api';
import logger from './logger';

createConnection().then(connection => {
  const app: Application = express();
  const PORT = process.env.PORT || 4000;
  console.log(process.env)
  app.use(bodyParser.json());
  app.use(helmet())
  app.use(cors());
  app.use(logger)
  app.use('/', routes);

  app.listen(PORT, () => console.log('Started on port: ' + PORT))
}).catch(err => console.log(err))


