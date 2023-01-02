"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('ratings', {
        score: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        commentary: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, { freezeTableName: true });
};
