var router = require('express').Router();
//const { Router } = require('express');
//const {databaseVersion} = require('express');
var sequelize = require('../db');                 // no longer needed, due to #5/6 not being needed
//var User = sequelize.import('../models/user');    //  ******** MAY NOT BE REQUIRED
var AuthTestModel = sequelize.import('../models/authtest');   //*  NOT REQUIRED due to #7
//var AuthTestModel = require('../models/authtest');  // 'sequelize.import' has be depracated; this is the current accepted syntax

/***************************************
***   GET ALL ITEMS FOR INDIVIDUAL USERS
****************************************/
// function finds all items in the table with the user id in the token
router.get('/getall', function (req, res) {
  var userid = req.user.id;

  AuthTestModel
    .findAll({
        where: { owner: userid }
    })
    .then(
      function findAllSuccess(data) {
        res.json(data);
      },
      function findAllError(err) {
        res.send(500, err.message);
      }
    );
});


/******************************************
***   POST SINGLE ITEM FOR INDIVIDUAL USER
*******************************************/
// function finds a single item in the table using the id (primary key) and the token (a foreign key)
router.post('/create', function (req, res) {
  var owner = req.user.id;
  var authTestData = req.body.authtestdata.item;

  AuthTestModel
    .create({
      authtestdata: authTestData,
      owner: owner
    })
    .then(
      function createSuccess(authtestdata) {
        res.json({
          authtestdata: authtestdata
        });
      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
});


/******************************************
***   GET SINGLE ITEM FOR INDIVIDUAL USER
*******************************************/
// adds an item to the table with the userid from the token
router.get('/:id', function(req, res) {
  var data = req.params.id;
  var userid = req.user.id;

  AuthTestModel
    .findOne({
      where: { id: data, owner: userid }
    }).then(
      function findOneSuccess(data) {
        res.json(data);
      },
      function findOneError(err) {
        res.send(500, err.message);
      }
    );
});


/******************************************
***   DELETE ITEM FOR INDIVIDUAL USER
*******************************************/
         //1            //2
router.delete('/delete/:id', function(req, res) {
  var data = req.params.id;   //3
  var userid = req.user.id;   //4

  AuthTestModel
    .destroy({    //5
      where: { id: data, owner: userid }    //6
    }).then(
      function deleteLogSuccess(data){    //7
        res.send('You removed a log!');
      },
      function deleteLogError(err){   //8
        res.send(500, err.message);
      }
    );

});

/*
1 - When a DELETE request is received, the controller looks for a matching function, like what the rest of the HTTP verbs do.
2 - We specify what we're doing in our endpoint to make it easy for the user to know what's happening. The :id allows a parameter to be passed through the URL to the server so we can use it later.
3 - This is the parameter passed through the URL. The same way req.body points to the body of the request, req.params points to the URL.
4 - This is our userid, set when validate-session is called.
5 - .destroy() is a Sequelize method to remove an item from a database. See the Sequelize docs (Links to an external site.) for more information.
6 - We tell Sequelize what to look for in trying to find an item to delete. If nothing matches exactly, nothing is done.
7 - Callback function. This response is sent when the delete is successful.
8 - Callback function. This response is sent when the delete is unsuccessful.
*/


/******************************************
***   UPDATE ITEM FOR INDIVIDUAL USER
*******************************************/
         //1    //2
router.put('/update/:id', function(req, res) {
  var data = req.params.id;   //3 
  var authtestdata = req.body.authtestdata.item;    //4

  AuthTestModel
    .update({   //5
        authtestdata: authtestdata    //6
    },
    {where: {id: data}}   //7
    ).then(
      function updateSuccess(updatedLog) {    //8
        res.json({
          authtestdata: authtestdata
        });
      },
      function updateError(err){    //9
        res.send(500, err.message);
      }
    )
});

/*
1 - PUT is one of the HTTP verbs that has to be weird by not telling you what it does. PUT replaces whatever is already there with what we give it. In other words, PUT means update.
2 - To make it easier on the user, we use update in our route. We also allow a variable (id) to be passed through the URL again.
3 - The parameter taken from the URL.
4 - Our data we want to put into the database, replacing what already exists.
5 - update is a Sequelize method which takes two arguments.
6 - First argument of update. Contains an object holding the new value we want to edit into the database.
7 - Second argument of update. Tells Sequelize where to place the new data if a match is found.
8 - Callback function. Runs if update is successful, and returns the data entered.
9 - Callback function. Runs if update is not successful, and returns the error message.
*/


//******************************************************
module.exports = router;