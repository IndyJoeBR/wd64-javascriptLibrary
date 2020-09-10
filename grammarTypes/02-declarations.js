// VARIABLES

console.log('hello');
// This version of it is primarily for debugging

// Variables are a named container that can store a value
// and be referenced later

let a = 2;

/*
     let : is our KEYWORD
     a : is the NAME of our variable
     = : is our ASSIGNMENT OPERATOR
     2 : is our variable VALUE
*/

let b = 1;

console.log(a + b);

/* VARIABLE RESTRICTIONS
   - a variable name must betgin with a letter, underscore or dollar sign
   - numbers may follow the above characters, BUT cannot come first
   - JS is case sensative - hello, Hello, HELLO are all different
   - no spaces are allowed in the name
   - the variable name should be meaningful
   - camelCase is the best practice for naming, but there is also PascalCase and Snake_Case
*/

let startingWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDollarSign = "Works";
// let 4startingWithNumber = "Breaks";
console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign);

/*  Variable keywords:
    -  var : 'old' keyword for 'variable'; not used as often now, but still viable
    -  let : 'new' keyword for a variable; introduced in ES6, the newest version of ECMAScript (the JS standard)
    -  const : 'new' keyword that declares and unchangable (constant) variable
*/


//  DECLARATAIONS & INITIALIZATIONS

let d = 2;

//   let d     is the declaration (left side)
//   d = 2     is the initialization (right side)

//   This can also be done separately:
let f;
f = 2;

console.log("Initializaton:", f);
console.log("Initializaton: " + f);

//     CONST
let today = "Great!";
const efa = "Wonderful!";
console.log(today, efa);
// 'const' allows us to make a variable
