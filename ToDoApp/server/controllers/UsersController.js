const { Router } = require('express');    // imports Router object
const bcrypt = require('bcrypt');

const { user } = require('../models/index'); // imports the user model through the 'key' in the export statement on index.js which it gets from userModel.js

const UserControllerRouter = Router();    // creates a Router object

// CRUD code for users  
// C - Create a user by registration  (url): "/register"
// R - Read user profile              (url): "/profile", "/login"
// U - Update user information        (url): "/update"
// D - Delete the user                (url): "/terminate"

// Kinds of requests
// POST   - create/insert new data into the db
// GET    - retrieve data from the db
// PUT    - modify existing data (requires a pre-existing bucket)
// DELETE - remove data from the db

UserControllerRouter.post('/register', (request, response) => {
  // PROCESS:
  // Retrieve data from body of the request
  // Use that data to craft a user
  // Save the user to the db
  // Respond with the status of the action

  let { email, password } = request.body;      // Retrieve data from body of the request

  let newUser = user.build({                  // Use that data to craft a user
    email: email,                             //  note: 'build' does not 'save', 'create' does both
    password: bcrypt.hashSync(password, 12)
  });

  newUser.save()                              // Save the user to the db
    .then(() => {
        console.log('[server]: new user was created');
        response.json({
          message: 'User successfully created!'
        });
    })
    .catch(error => {
      console.log(error);
      response.status(500).json({
        message: 'Failed to create user',
      });
    });

  response.json({
    message: "Hello from the user Register route!"
  })

});


UserControllerRouter.post('/login', (request, response) => {
  // PROCESS:
  // Retrieve the data from the body of the requrest
  // verify the user exists, and the data marches what is in the record
  // If so: respond with a token
  // If not: respond with a denial

/*
  response.json({
    message: "Hello from the user Login route!"
  })
*/

});



//   ******   TODO:  /profile, /update, /terminate









module.exports = UserControllerRouter;