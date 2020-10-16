const Sequelize = require("sequelize");

const applicationSequelizeObject = new Sequelize(   
  "todo-db",
  "postgres",
  "dbpassword", {
  host: 'localhost',
  dialect: 'postgres'
});




module.exports = applicationSequelizeObject;