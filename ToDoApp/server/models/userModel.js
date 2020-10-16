const {DataTypes} = require('sequelize');   // ONLY pulls DataTypes (a subclass) out of Sequelize

const applicationDatabaseObject = require('../db');   // 

// The userModels table will have an email and password column
const User = applicationDatabaseObject.define('user', {
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// This creates a table with 3 columns (primary key, dateCreated, dateUpdated) + our two above columns (email & password)

module.exports = User;
