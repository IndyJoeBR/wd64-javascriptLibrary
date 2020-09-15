/*  *****   SCOPE   *****

What is scope?

   -  scope is how a computer keeps track of all the variables in a program
   -  scope can also be nested, where there is an out scope (global) that encloses an inner scope

*/

let x = 1;      // global scope; always available

//  or

let scope = 'Earth';          // anything within the program can access this scope

function localScope() {
  let scope = "Indiana";     // this scope is local, just within the funciton
  console.log(`${scope} marks the local scope`);
}

console.log(`${scope} marks the global scope`);
localScope();

//  ***  IF JS cannot find a variable referenced inside the function referencing it (local),   ***
//  ***  JS looks outside the function (global) to find that variable.                         ***
//  
//  This is similar to the Parent-Child relationship in HTML.  The Child has access to the
//  settings of the Parent, but the Parent doesn't have access to the Child's settings
//
//  RETURN is how you pass a local value (inside a function) out to a global variable


/*  ORDER MATTERS
    JS reads from top to bottom and acts according to what is being asked.
    JS is known as a single-threaded language which means it can only execute
      one task at a time.
*/

let ordered = 1;

function layerOne() {
  let ordered = 2;
  
  function layerTwo() {
    let ordered = 3;
    console.log(ordered);
  }

  layerTwo();
  console.log(ordered);

}

layerOne();
console.log(ordered);


//  REASSIGNMENTS:   VAR  vs.  LET
//  While they seem to operate the same way, they actually don't... exactly
//    - var is scoped to the nearest function block
//    - let is scoped to the nearest enclosing block

//  In this example, 'a' is global and remains global - it is how LET works
let a = 10;
function reassign() {
  a = 30;    //  we are keeping this variable open and, with LET, we are capable of changing
             //  the value that is currently being held within that variable
  console.log(`   a is being set to ${a} in this function`);
}
console.log(`Before reassigning function: ${a}`);
reassign();
console.log(`After reassigning function: ${a}`);


// In this example, 
var x = 2;
function varScope() {
  var x = 4;
  if(true) {
    var x = 5;
    console.log(x);
  }
  console.log(`VAR block scope: ${x}`);
}

varScope();
console.log(x);

//  statements like "if" or loops don't create a new scope



