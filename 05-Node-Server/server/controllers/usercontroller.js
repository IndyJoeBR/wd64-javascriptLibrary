var express = require('express');
var router = express.Router()    // bring in the necessary imports, same as
var sequelize = require('../db'); // testcontroller, but a User model now
var User = sequelize.import('../models/user');
var jwt = require('jsonwebtoken'); // added for user authentication

//*********************************
//   Create User Endpoint: Starter
//*********************************

// start out our POST method for a createuser endpoint
router.post('/createuser', function (req, res) {

  //var username = "The Dude";                // basic user data, but created
  //var pass = "therugtiedtheroomtogether";   // inside the method

  var username = req.body.user.username;
  var pass = req.body.user.password;

  User.create({
    username: username,
    passwordhash: pass

  }).then(
    function createSuccess(user) {

      var token = jwt.sign({id:user.id}, "i_am_secret", {expiresIn: 60*60*24});

      res.json({
        user: user,
        message: 'created',  // along w/ the JSONized object, we send a message
        sessionToken: token
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

module.exports = router;

/*
1 - bring in our necessary imports - same as the testcontroller - just with
      a User model now
2 - start out our POST method for a createuser endpoint
3 - inside the method, we have the basics for creating a new user and
      returning a message in the response
*/