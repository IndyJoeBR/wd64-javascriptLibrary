//  Controller with one get request that responds with a message saying, " Hello from test controller"

//  Pulls in ALL of Express
//  const Express = require('express');

//  instead we can destructure it and just look for the Router keyword
const { Router } = require('express');

const testControllerRouter = Router();    // set our router for the test controller; 'new' is implied somewhere, but not here and not by us

testControllerRouter.get("/", (request, response) => {     // 
  let message = "Hello from the test controller!";
  response.send(message);
});





module.exports = testControllerRouter;