/*   ***** ARROW FUNCTIONS *****

Arrow functions are expressional functions that can be
simplified into one of the two forms:
   CONCISE
   BLOCK BODY

The main goal is to generate shorter syntax for writing a function.

NOTE:  Arrow functions do NOT get hoisted.

*/

// regular function
function regFunction() {
  console.log("Regular function");
}

regFunction();

// arrow function
let arrowFunction = () => console.log('Arrow Function');

arrowFunction();   //  It still needs to be invoked, 

/*
  1.  Arrow functions are ALWAYS anonymous
  2.  Parameters are still capable of being injected
        -  if we only have one parementer, we technically don't need the params ()
        -  BUT if we are not passing params, it is REQUIRED to denote ()
           -  JUST PUT THEM IN
  3.  This syntax tells JS that we are about to process a function
  4.  Within this format, JS assumes the return statement
*/

// CONCISE vs BLOCK BODY

//  Concise

let conciseBody = (x, y) => console.log(x + y);
conciseBody(1,2);

let slightlyComplex = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`);
slightlyComplex(3,1);
slightlyComplex(1,5);


// Block
// The 'return' keyword IS required.  We also include the curly braces.
let blockArrow = (x,y) => {
  return `${x} are within a ${y}`;
}

console.log(blockArrow('We', 'Block Body'));

let sampleBlock = x => {
  console.log(x)
}




