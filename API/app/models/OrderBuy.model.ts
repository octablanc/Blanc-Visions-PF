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
        // allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dues: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      buy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }

    },
    { freezeTableName: true }
  );
};
