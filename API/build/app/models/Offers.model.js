"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define("offers", {
        percentage: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        upSelling: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: false,
        },
        crossSelling: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: false,
        },
        state: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, { freezeTableName: true });
};
