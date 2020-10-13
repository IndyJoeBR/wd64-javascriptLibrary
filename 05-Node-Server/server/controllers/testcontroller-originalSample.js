var express = require('express');   //We import the Express framework and it inside the variable express. This instance becomes our gateway to using Express methods.
var router = express.Router();      // creates a new express.router object called router

router.get('/', function (req, res) {   // 'router' method 'get' has two arguments, path('/') and a callback function

  res.send('Hey!!! This is a test route!');  // this is the callback function, when it is called, it uses .send() to send the message
});


router.get('/about', function (req, res) {
  res.send('This is an ABOUT route') 
});

// Pass in an object
router.get('/contact', function (req, res) {
  res.send({user: "kenn", email: "kenn@beastmode.com"});
});

// Pass in an array
router.get('/projects', function (req, res) {
  res.send(['Project 1', 'Project 2']);
});

// Pass in an array of objects
router.get('/mycontacts', function (req, res) {
  res.send([
    {user: "quincy", email: "kenn@beastmode.com"},
    {user: "arron", email: "aaron@beastmode.com"},
    {user: "quincy", email: "quincy@beastmode.com"},
    {user: "tom", email: "tom@beastmode.com"}
  ]); 
});


module.exports = router;    // exports the router for use in other files