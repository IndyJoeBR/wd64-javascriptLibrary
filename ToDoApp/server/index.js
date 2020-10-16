const Express = require('express'); // import express app

const applicationSequelizeObject = require("./db");
const applicationControllers = require('./controllers/index');   // goes into controllers/index.js 

const expressApplicationObject = new Express();           // create Express object
expressApplicationObject.use(Express.json());             // takes incoming data and turns it into json

expressApplicationObject.use('/test', applicationControllers.test);   // whenever you see /test, use applicationControllers.test
expressApplicationObject.use('/users', applicationControllers.users); 



expressApplicationObject.get('/', (request, response) => {
  console.log('[server]: Root GET request received');     // logs that the GET request has been received
  console.log('TYPE:', request.method);                   // logs the type of method used (GET)
  console.log('URL:', request.url);                       // logs the URL (in this case '//)
  console.log('[server]: Response being dispatched ->');  // logs the action going to be taken
  response.send('Root Route Hit, hello from the ToDo server');    // ONLY THIS is seen by Postman... the response to the request
});

// Challenge: Recieve a POST request at the route "/challenge"
//    Takes 2 values inside of the body:
//      Name - a string for a name
//      Age - a number for the age
//    Respond with this message:
//      IF the user is 18+ : "<name>, you are an adult!"
//      ELSE : "<name>, you will be an adult soon!"

// JSON in a request is a STRING
/*



expressApplicationObject.post("/challenge", (request, response) => {
  let data = request.body;
  let message =
    data.age >= 18
    ? `${data.name}, you are an adult`
    : `${data.name}, you will be an adult soon!`;

  response.send(message);
});

*/





// *****   STARTUP PROCEDURE   *****
// Verify connection to Postgres db
// Synchronize Database with Models
// Listen on specified port

     // This is where connection to the DB begins
applicationSequelizeObject.authenticate()           // Verify connection to Postres db
  .then( () => applicationSequelizeObject.sync())   // Synchronize db with models
  .then( () => {
    expressApplicationObject.listen(9001, () => {   // start it listening on port 9001
      console.log("[server]: App is listening on port 9001");
    });
  })
  .catch((err) => {
    console.log(err);
  });




// UNTIL STARTUP IS COMPLETE
/*

*/

