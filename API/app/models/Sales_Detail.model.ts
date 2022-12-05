import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    sequelize.define('sales_detail', {
        cantidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        descuento: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }

    }, { freezeTableName: true });
};