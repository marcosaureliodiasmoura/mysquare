import { Router } from 'express';
import Helper from './app/models/helper';

const routes = new Router();

routes.get('/', async (req, res) => {
  const help = await Helper.create({
    name: 'Maria',
    surname: 'Do Barro',
    phone: '81996732525',
    product: 'Água mineral',
    description: 'Preciso de água e n tenho como comprar',
    latitude: -8.144991,
    longitude: -34.964849,
  });
  return res.json(help);
});

export default routes;
