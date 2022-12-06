import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "cart",
    {
      priceTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
