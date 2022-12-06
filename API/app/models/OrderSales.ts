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
      cantidadDelProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
