module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authtestdata', {
    authtestdata: DataTypes.STRING,
    owner: DataTypes.INTEGER
  });
};

/*
Notice that we will be providing two properties: authtestdata and owner.

Think of authtestdata as a string like testData.

The owner is a number, a foreign key, that will point to a specific user on the users table.
*/