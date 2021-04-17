const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

Post.init(
    
    {   title: DataTypes.STRING,
        body: DataTypes.STRING,
    },
    {
        sequelize,
    },
    
);

module.exports = Post;