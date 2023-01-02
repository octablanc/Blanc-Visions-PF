"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define("users", {
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        imageProfile: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: false,
        },
        state: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, { freezeTableName: true });
};
