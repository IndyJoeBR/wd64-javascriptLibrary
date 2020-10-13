//  BRING IN VARIABLES
var express = require('express');    // require use of express npm package we installed in dependencies
var app = express();                 // create an instance of express
var test = require('./controllers/testcontroller');   // imports the router object and store it in/call it 'test'
var sequelize = require('./db');  // sequelize variable imports db file



// SET UP MIDDLEWARE
sequelize.sync(); // ensures that we sync all defined models to the DB
                  //  ( pass in {force: true} for resetting tables )


//  Tells the application that json should be used as we process the request
app.use(express.json());  // MUST go above any routes;

app.use('/test', test);



// CREATE ROUTES
// Added for Postman and Routes explanation
app.use('/api/test', function(req, res) {
  res.send("This is data from the /api/test endpoint.  It's from the server.")
});


//  MOVED FROM DB.JS
sequelize.authenticate().then(
  function() {  // Fire a function that shows if we're connected
    console.log('Connected to workoutlog postgres database');
  },
  function(err) {   //Fire an error if there are any errors
    console.log(err);
  }
);




app.listen(3000, function() {        // app.listen will use express to start a UNIX socket and listen on localhost: 3000
  console.log('Cool man... running at Computron 3000.');  // call a callback function when the connection happens
});








  