// ASYNCHRONOUS PROGRAMMING
/*    - synchronous programming is code read line by line
      
      - Asynchronous programming allows a program to do more than one thing at a time
          - think running while waiting on data from a distance location
      - Makes it possible to run long-running actions without stopping the program
          to wait for a response

*/

// Synchronous Sample - an 'Execution Stack'

const secondSync = () => {
  console.log('Second Hello');
};

const firstSync = () => {
  console.log('First Hello');
  secondSync();
  console.log('End');
};

firstSync();

//  'First Hello', then 'Second Hellow,  then "End."
//  Once the one is completed, the next will execute.


//  Asynchronous sample
//  - model of a network request

const networkRequest = () => {
  setTimeout( () => {                 // setTimeout:   has two arguments
    console.log('Async Code')         //     callback (the function to run)
  }, 4000);                           //     and time measured in milliseconds
}
console.log('Hello World');
networkRequest();
console.log('The End');
//  Event loop:  looks into the called execution stack and determines if it is empty or not;
//     If empty, it considers if there is any waiting callback that needs to be executed
//     (the console.log('Async Code')).
//     Its looking back and waiting for the timeout to end and when it does, it finishes
//     the thing its been waiting and performs that task immediately.


// APIs  (Application Program Interface)

/*
    Allows applications to interact
      -  not a database or a server
      -  allows us access points to a server
            -  comes in the form of ENDPOINTS
            -  endpoints direct us to sets of data
    REST API
    -  REpresentational State Transfer
    - Methods:
      - CRUD
        -  Create (POST)
        -  Read (GET)
        -  Update (PUT)
        -  Delete (DELETE)
*/

//  FETCH()
/*
  - the fetch() method is an asynchronous method; part of the browser, NOT JS
  - the fetch() method starts the process of 'fetching' a resource
      - it will return a promise and respond once that promise is fulfilled
      - Promise: "Bank promises to loan you the money"
        - this is one of three states:
          -  Pending: initial state, neither fulfilled or rejected
          -  Fulfilled: meaning the operation has completed successfully
          -  Rejected: meaning the operation failed

*/          
               





