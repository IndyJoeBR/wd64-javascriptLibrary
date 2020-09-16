/*  *****    HOISTING    *****

What is hoisting?
   -  JS pulls all variables AND functions calls to the 'top' of their
         respective scope prior to be executed
   -  Only the declaration is pulled up, NOT the assignment
   -  Like the "Content"-page of a book... you know the names of the Chapters,
         but not what the chapter is about
*/

//console.log(hoistedVar);

//console.log('How JS see hoistedVar:', typeof hoistedVar);
// var hoistedVar = "using var";
// let hoistedVar = "using let";

//  ONE or the OTHER of the VAR/LET lines should be commented out or it breaks


let declaration;     // no initialization
console.log(usage);

declaration = 10;    // initializaing our variable
console.log(usage);

var usage = declaration + 10;     // 'usage' is finally initialized and will no longer be 'undefined'

console.log(usage);


// Hoisting in a Function
//  This process is considered the same within a function.  On the first pass,
//    it reads it, pushes the declarations to the top and then executes them
//    in the order that they are written.

//  ESSENTIALLY... JS treats a function like a mini-program, hoisting then executing

function testHoist() {
  becomesGlobal = "not declared, it becomes part of the global scope";
  console.log('prior to declaring ', insideFunc);
  var insideFunc = "Rules still apply here";
  console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS declare variables, regardless of whether they are in a function or global scope.
//   This makes it clear how it should be handled.


//  Using LET
//  The keyword 'let' is block scoped and not function scoped.

console.log(letVariable);          // throws an error because 'letVariable' hasn't been declared
let letVariable = 'Using let';      
//  This throws a ReferenceError due to ES6 not accepting undeclared variables.  
//   This is to ensure we ALWAYS declare our variables first.


//  Hoisting Function
//  Function Declarations:
//     The function can be called upon before JS has got down to it.
hoistedFunc();

function hoistedFunc() {
  console.log('This is a hoisted function');
  }


//  Function Expressions:
//    These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
  console.log("Works?");
}



