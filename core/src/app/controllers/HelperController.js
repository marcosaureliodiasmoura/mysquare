import Helper from '../models/helper';

class HelperController {
  async store(req, res) {
    const {
      id,
      name,
      surname,
      phone,
      product,
      description,
      latitude,
      longitude,
      gift,
    } = await Helper.create(req.body);

    return res.json({
      id,
      name,
      surname,
      phone,
      product,
      description,
      latitude,
      longitude,
      gift,
    });
  }
}

export default new HelperController();
