import { Router } from 'express';
import auth from './auth';
import posts from './posts';

const routes = Router();

routes.use('/auth', auth);
routes.use('/posts', posts);

export default routes;