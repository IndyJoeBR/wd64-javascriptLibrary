//  Junction/Collection point and outlet for all controllers

//  Purpose:
//    CRUD for LISTS
//    CRUD for ITEMS
//    CRUD for USERS

//  index.js is the collection point for all controllers
//  index.js is the outlet point for all controllers

//  Current Goal: create Test Controller

const TestController = require("./TestController");
const UsersController = require("./UsersController")

module.exports = {        // will be building a object 
  test : TestController,  // this is the same as saying TestController:TestController
  users : UsersController
};





