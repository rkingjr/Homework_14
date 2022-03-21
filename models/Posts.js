const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connections');

class Posts extends Model {}
Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        postTitle: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        postContent: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        dateCreated: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
    }
);

module.exports = Posts;
