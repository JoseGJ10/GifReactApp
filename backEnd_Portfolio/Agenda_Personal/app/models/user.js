'use strict';

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING
        },
        status: {
            allowNull: true,
            defaultValue: 1,
            type: DataTypes.CHAR
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'user',
        classMethods: {}
    });
    user.associate = function(models) {
    // associations can be defined here
    };
    return user;
};