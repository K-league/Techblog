const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }   
}

Post.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       } ,
       user_id: {
        type: DataTypes.STRING,
        foreignKey: 'user_id',
       },
       comment_id: {
           type: DataTypes.STRING,
           foreignKey: 'comment_id',
       },
    },
    {
        hooks: {
            beforeCreate: async (newPost) => {
                newPost.password = await bcrypt.hash(newPost.password, 10);
                    return newPost;
            },
            beforeUpdate: async (updatedPost) => {
                updatedPost.password = await bcrypt.hash(updatedPost.password, 10);
                return updatedPost;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    },
);

module.exports = Post;