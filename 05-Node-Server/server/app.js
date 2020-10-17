//  BRING IN VARIABLES
require('dotenv').config();          // Must be top of file, makes items in an .env package available to application

var express = require('express');    // require use of express npm package we installed in dependencies
var app = express();                 // create an instance of express
var test = require('./controllers/testcontroller')   // imports the router object and store it in/call it 'test'
var authTest = require('./controllers/authtestcontroller');   //imported to access endpoints

var user = require('./controllers/usercontroller')   // imports usercontroller.js and store it in 'user'
var sequelize = require('./db');  // sequelize variable imports db file



// SET UP MIDDLEWARE
sequelize.sync(); // ensures that we sync all defined models to the DB
                  //  ( pass in {force: true} for resetting tables )


//  Tells the application that json should be used as we process the request
app.use(express.json());  // MUST go above any routes;

app.use(require('./middleware/headers'));   // activates headers, file read sequentially so it must come before the routes


//*********************
//    EXPOSED ROUTES
//*********************
app.use('/test', test);
app.use('/api/user', user);  // set route to endpoints for the api/user route
// This could also be written out without the require statement above:
//     app.use('/api/user', require('./controllers/usercontrollers'));

// Added for Postman and Routes explanation
app.use('/api/test', function(req, res) {
  res.send("This is data from the /api/test endpoint.  It's from the server.")
});

//*********************
//    PROTECTED ROUTES
//*********************
//  Anything beneath the validate-session will require a token to access, thus becoming protected. Anything above it will not require a token, remaining unprotected. Therefore, the test and user routes are not protected, while the authtest route is protected.
app.use(require('./middleware/validate-session'));  // import validate-session middleware, which will check if the incoming request has a token
app.use('/authtest', authTest);



/*
//  MOVED FROM DB.JS
sequelize.authenticate().then(
  function() {  // Fire a function that shows if we're connected
    console.log('Connected to workoutlog postgres database');
  },
  function(err) {   //Fire an error if there are any errors
    console.log(err);
  }
);
*/



app.listen(3000, function(){        // app.listen will use express to start a UNIX socket and listen on localhost: 3000
  console.log('App is listening on 3000.');  // call a callback function when the connection happens
});








  