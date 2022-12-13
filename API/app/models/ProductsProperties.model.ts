import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "products_properties",
    {
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false },
  );
};