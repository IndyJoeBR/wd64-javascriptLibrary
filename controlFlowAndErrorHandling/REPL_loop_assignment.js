//  ASSIGNMENT: 1.1 - Loops, Conditionals, Functions

/* 1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke
      a function and accept the data from the for loop as a parameter(see step 2).
   2. Declare a function. Inside the function, console.log each number (0-10) from the
      previously written for loop. Your console should look like the screenshot below.
   3. Inside of the function, write a conditional that checks if the number is even or odd.
      If the number is even, console.log 'the number is even'. If the number is odd, console.log
      'the number is odd'. Your console should now look like the screenshot below.
*/


function printToLog(loopInput) {
  console.log(loopInput);
  if( (loopInput % 2) == 0 ) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}


for(let i = 0; i <= 10; i++) {
  printToLog(i);
}



