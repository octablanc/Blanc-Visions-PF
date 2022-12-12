import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    sequelize.define(
      'images',
      {
        url_image: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        state: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
  };
  