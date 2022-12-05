import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    sequelize.define('detalle_venta', {
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