import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "orderSales",
    {
      precioTotalDescuento: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      descuento: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      codigoPostal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      calle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      altura: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
