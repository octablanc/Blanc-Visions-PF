import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "orderBuy",
    {
      priceTotalDiscount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantityProducts: { // Lo agrewgamos el jueves
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dues: {
        type: DataTypes.INTEGER,
        allowNull: false
      }

    },
    { freezeTableName: true }
  );
};
