const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config');
const User = require('./User');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Post.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = Post;
