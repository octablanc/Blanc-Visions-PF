import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "products",
    {
      codigo: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(400),
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      cantidadProductos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
