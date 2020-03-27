import { Router } from 'express';

import HelperController from './app/controllers/HelperController';

const routes = new Router();

routes.post('/helpers', HelperController.store);

export default routes;
