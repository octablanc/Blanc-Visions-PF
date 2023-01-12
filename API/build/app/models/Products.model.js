"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('products', {
        code: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            get() {
                const rawValue = this.getDataValue('name');
                return rawValue ? rawValue.toLowerCase() : null;
            },
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(800),
            allowNull: false,
        },
        image: {
            type: sequelize_1.DataTypes.STRING(400),
            allowNull: false,
        },
        discount: {
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 0,
        },
        state: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, { freezeTableName: true });
};
