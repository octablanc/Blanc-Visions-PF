"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define("orderBuy", {
        priceTotalDiscount: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        discount: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        state: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
        postalCode: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        street: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        height: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        dues: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        buy: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, { freezeTableName: true });
};
