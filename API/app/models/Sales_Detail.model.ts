import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    sequelize.define('sales_detail', {
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }

    }, { freezeTableName: true });
};