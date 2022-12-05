import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    sequelize.define('categoria', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    }, { freezeTableName: true });
};