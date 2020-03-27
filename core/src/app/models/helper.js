import Sequelize, { Model } from 'sequelize';

class Helper extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
        phone: Sequelize.STRING,
        product: Sequelize.STRING,
        description: Sequelize.STRING,
        latitude: Sequelize.DECIMAL(6, 9),
        longitude: Sequelize.DECIMAL(6, 9),
        gift: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Helper;
