"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('images', {
        url_image: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
    }, { freezeTableName: true, timestamps: false });
};
