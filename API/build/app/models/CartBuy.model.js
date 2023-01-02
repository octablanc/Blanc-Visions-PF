"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define("cartBuy", {
        priceTotal: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
    }, { freezeTableName: true });
};
