"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('categories', {
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        state: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, { freezeTableName: true, timestamps: false });
};
