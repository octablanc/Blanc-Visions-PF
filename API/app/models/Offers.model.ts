import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "offers",
    {
      percentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      upSelling: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      crossSelling: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
