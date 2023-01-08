import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  sequelize.define(
    'ratings',
    {
      score: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      commentary: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true }
  );
};
