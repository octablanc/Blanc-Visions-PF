import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  sequelize.define(
    'products',
    {
      code: {
        type: DataTypes.STRING,

        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(800),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(400),
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
