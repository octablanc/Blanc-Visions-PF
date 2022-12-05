import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
    sequelize.define('users_address', {
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { freezeTableName: true });
}