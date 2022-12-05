import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
    sequelize.define('sales', {
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { freezeTableName: true });
}