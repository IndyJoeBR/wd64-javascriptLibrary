//   COMPARISON OPERATORS

//  Equivalence
"3" == 3;
console.log("3" == 3);      // JS converts and looks at the value


//  Strict equivalence
"3" === 3;
console.log("3" === 3);     // JS looks at the value AND the type and both must be the same

console.log("Bob" === "bob");   //  This is false because JS is case sensative


//  NOT equal
console.log("3" != 3);         // is false because they are actually equal 
console.log(35 != 3);          // is true because 35 and 3 are equal

// Strict NOT equal
console.log("3" !== 3);        // JS is checking the data types and so this is actually true


//  Greater Than
3 > 2;

//  Less Than
2 < 3;

//  Greater Than or Equal To
3 >= 2;               // this is different from " => " which is called a 'fat arrow'

//  Less Than or Equal To
2 <= 3; 


//  LOGICAL OPERATORS
console.log("LOGICAL OPERATORS");

//  AND is &&
2 && 3;     // It checks both values to see if they are true, and returns the last when they are

//  OR is ||
2 || 3;    // This value is equal to this OR that.

let two = "two";
let three = "three";
if("two" === two && three) {
  console.log(true);
} else {
  console.log(false);
}

// NOT is !
if( ! ( 2<3 && 5>4));












