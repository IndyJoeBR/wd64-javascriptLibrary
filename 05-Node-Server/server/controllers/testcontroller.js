var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');  // import the test model
                                                     // use PascalCase for model
                                                     // class with Sequalize

// CONTROLLER METHOD #1 - a simple response
      //1          //2
router.post('/one', function(req, res) {

   //3
  res.send('Test 1 went through!')
});

/*
1 - use Express router to call .post() method, which corresponds
       to a POST http request (saves something to the db)
2 - '/one' will be the endpoint/route used; so the route will be
       name: http://localhost:3000/test/one; when something goes
       to the endpoint, it fires the callback function (res.send)
3 - when the client requests the given endpoint, it sends this string       
*/


// CONTROLLER METHOD #2 - persisting (storing) data

router.post('/two', function (req, res) {
  let testData = "Test data for endpoint two";  //2

  TestModel //3
    .create({   //4
        //6
     testdata: testData   //5   
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});

/*
2 - 'testData' is going to have a fixed string that we'll use every time a POST
        request comes through
3 - use TestModel variable to access model we are using; grants access to Test
        model properties and the Sequelize methods
4 - .create() method allows us to create an instance of Test model and send it
        to the db AS LONG AS the datatypes match
5 - pass value of testData to satisfy key/value pair for model (testData is the 
        string from the let statement)
6 - testdata is the key in the object and represents the column used in the table
*/


// CONTROLLER METHOD #3 - req.body

router.post('/three', function (req, res) {

                    //1
  var testData = req.body.testdata.item
  
  TestModel
    .create({     //2
      testdata: testData
    })
  res.send("Test three went through!")
  console.log("Test three went through!")
  });  



// CONTROLLER METHOD #4 - use this with Postman

router.post('/four', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(    // returns a promise to force flow to wait
      function message() {    // prints message after object written to db
        res.send('Test 4 went through!');
      }
    );
});



// CONTROLLER METHOD #5 - Return data in a promise

router.post('/five', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(    // .then is actually chained to .create
      function message(data) {    //2
        res.send(data);
      }
    );
});



// CONTROLLER METHOD #6 - Return response as JSON

router.post('/six', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(   
      function message(testdata) {
        res.json({      // instead of .send, use .json to JSONize the response
          testdata: testdata  // the data stored is sent back to the client
        });
      }
    );
});    



// CONTROLLER METHOD #7 - Handle errors

router.post('/seven', function (req, res) {
  var testData = req.body.testdata.item;
  
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        });

      },
              // if create() returns an error, createError picks it up
              //    and sends back a 500 error with a message
      function createError(err) { 
        res.send(500, err.message);
      }
    );
});    


/* *****************************************
      GET:  Get simple message from server
   *****************************************
*/
router.get('/helloclient', function(req, res) {
  res.send('This is a message from the server to the client.')
})



/* *****************************************
      GET:  /one
   *****************************************
*/
router.get('/one', function(req, res) {

  TestModel.findAll({      //1
        attributes: ['id', 'testdata']
      })
      .then(
          function findAllSuccess(data) {
              console.log("Controller data:", data);    // logs data to terminal and, in theory, the console
              res.json(data);                           // JSONifies the data for use by the fetchOneDisplayData function
          },
          function findAllError(err) {
            res.send(500, err.message);
          }
      ).catch((error) => console.log(error))
});


/*
1 - Notice that we find the attributes for two of the columns: id & testdata. This is part of sequelize. If you are querying an entire table, you can choose which columns you want to grab from. The other columns will not be queried, which can save time for a giant table.
*/





module.exports = router;