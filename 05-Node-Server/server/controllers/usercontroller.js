var express = require('express');               // installs Express
var router = express.Router()                   // bring in the necessary imports, same as
var sequelize = require('../db');               // same as testcontroller, but a User model now
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');               // added for password encryption
var jwt = require('jsonwebtoken');              // added for user authentication

//*********************************
//   Create User Endpoint: Starter
//*********************************

// start out our POST method for a createuser endpoint
router.post('/createuser', function (req, res) {

  var username = req.body.user.username;
  var userpassword = req.body.user.password;

  User.create({
    username: username,
    passwordhash: bcrypt.hashSync(userpassword, 10)

  }).then(
    function createSuccess(user) {

      var token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

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


/*
1 - bring in our necessary imports - same as the testcontroller - just with
      a User model now
2 - start out our POST method for a createuser endpoint
3 - inside the method, we have the basics for creating a new user and
      returning a message in the response
*/


// SIGN-IN METHOD ROUTE

        //7
router.post('/signin', function(req, res) {

        //1        //2        //3        
  User.findOne( { where: { username: req.body.user.username } } )
      .then (  //4

         //5
      function(user) {

           //2.1
        if (user) {

                   //2.2          //2.3
          bcrypt.compare(req.body.user.password,
                         user.passwordhash,     //2.4
                         function(err, matches) {   //2.5
              // console.log("The value matches:", matches);   //2.6   replaced by IF when the passwords match

                   //3.1
              if (matches) {

                   //3.2
                var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 } );
                res.json({   //3.3
                  user: user,
                  message: "successfully authenticated",
                  sessionToken: token
                });
              } else {     //3.4
                res.status(502).send({error: "you failed, you"});
              }             

          });

        } else {    //2.7
          res.status(500).send({ error: "failed to authenticate"});
        }
      },
      function (err) {
        res.status(501).send({ error: "you failed, no such username"});   //6
      }
    )
});

/*
1 - The findOne() method is a Sequelize method that does exactly what it says: it tries to find something within the database
       that we tell it to look for. This is called Data Retrieval. Check out the Sequelize docs here (Links to an external site.).
2 - where is an object within Sequelize that tells the database to look for something matching its properties.
3 - We're looking in the username column in the user table for one thing that matches the value passed from the client.
4 - The promise is handled within the .then() function.
5 - Here we have a function that is called when the promise is resolved, and if successful, sends the user object back in the response.
6 - Function called if the promise is rejected. We print the error to the console.
7 - We're sending data this time, so we use router.post instead of router.get.

2.1 - First we check to make sure that a match for the username was found.
2.2 - Before, we used bcrypt to encrypt the password. Now, we use it to decrypt the hash value and compare it to the supplied password. This is a complex task, and we let the highly reputable and revered bcrypt package handle the algorithm for doing that. As a best practice, you shouldn't try to write this or use something that you have written. First of all, it will take months of your life to rebuild something that is already working. You can read more about bcrypt.compare() at the npm registry (Links to an external site.).
2.3 - Here we pull in the password value from the current request when the user is signing up.
2.4 - This pulls the hashed password value from the database.
2.5 - Run a callback function that will run on either success or failure of compare.
2.6 - If the hashed password in the database matches the one that has been entered, print to the console that the password values match. Note that the matches variable is a boolean.
2.7 - Handle situations where the match fails.

3.1 - Here we use the callback function from the compare() method. If the username and password are a match, this will be set to true, and the expression in the conditional will execute.
3.2 - Upon success, we will create a new token for the session. Note that this code uses the same jwt.sign method that we used upon sign up. We will let you review that code if you need clarification.
3.3 - We return the user object with a success message and sessionToken.
3.4 - If the passwords don't match or the username is not correct, we send a response telling the client that authentication did not occur.


*/





module.exports = router;