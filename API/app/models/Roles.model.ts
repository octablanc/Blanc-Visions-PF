import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
    sequelize.define('roles', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { freezeTableName: true });
}