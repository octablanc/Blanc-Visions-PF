import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "carrusel",
    {
      precioTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
};
