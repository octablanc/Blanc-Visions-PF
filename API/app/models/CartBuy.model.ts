import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "cartBuy",
    {
      priceTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
