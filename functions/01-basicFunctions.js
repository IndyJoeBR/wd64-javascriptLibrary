//     FUNCTIONS

//   Functions are a process that we call upon to run an action
//      -   They MAY take an input to be processed
//      -   Returns a value (but not always)
//      -   Can be invoked (called up) as often as we need

//  This is a FUNCTION DELCARATION
// (1)    (2) (3)
function hello() {
  console.log("Hello World");
//     action/statement
// return value;
}  //     action/statement

/*   1)  keyword
     2)  name
     3)  parameters
*/

function startCoffeeMaker (drinkToMake) {
  console.log("I put " + drinkToMake + " in the coffee maker.")
  console.log("I add water and hit start.")
  console.log("And now I have a hot pot of " + drinkToMake + ".")
}
startCoffeeMaker("tea");

/*  The Function consists of:
    1 - the FUNCTION keyword
    2 - name of the function
    3 - parameter(s) in parantheses
    4 - statement to be processed
    5 - invocation statement (which may include arguments)

    function FUNCTION-NAME(PARAMETERS);
         FUNCTION-STATEMENT;
}
*/

// FUNCTION EXPRESSION
//  Assigning a function to a variable is what is called an EXPRESSION
let first = function funcTwo() {
  console.log('Second Statement');
}

first();


// ANONYMOUS FUNCTION
// Anonymous Functions are stored in memory, but the runtime doesn't automatically
// create a reference for it.

let anon = function() {
  console.log('anon function')
}

anon();
