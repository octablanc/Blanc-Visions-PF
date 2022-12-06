import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "cartSale",
    {
      priceTotalCart: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
