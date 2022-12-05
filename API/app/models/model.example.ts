import { DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    sequelize.define('model_example', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    });
}

