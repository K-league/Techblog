//require models: Post, Comment, User
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//Posts belong to User
Post.belongsTo(User, {
    foreignKey: 'post_id'
});
//Posts have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
//Comments belong to User
Comment.belongsTo(User, {
    foreignKey: 'comment_id'
});

// //User can have many Posts
// User.hasMany(Post, {
//     foreignKey: 'user_id',
// });
// //User can have many Comments
// User.hasMany(Comment, {
//     foreignKey: 'user_id'
// });



module.exports = { User, Post, Comment };