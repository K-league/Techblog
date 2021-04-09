const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }   
}

Comment.init(
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
       post_id: {
           type: DataTypes.STRING,
           foreignKey: 'post_id',
       },
    },
    {
        hooks: {
            beforeCreate: async (newComment) => {
                newComment.password = await bcrypt.hash(newComment.password, 10);
                    return newComment;
            },
            beforeUpdate: async (updatedPost) => {
                updatedComment.password = await bcrypt.hash(updatedComment.password, 10);
                return updatedComment;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    },
);

module.exports = Comment;