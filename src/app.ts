import express, { Application } from "express";
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import cors from 'cors';
import helmet from 'helmet';

import routes from './api';

createConnection().then(connection => {
  const app: Application = express();
  const PORT = process.env.PORT;

  app.use(bodyParser.json());
  app.use(helmet())
  app.use(cors());
  app.use('/', routes);

  app.listen(PORT)
}).catch(err => console.log(err))


