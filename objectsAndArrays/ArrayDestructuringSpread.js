/*
With the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. (At this time, the first shoppingList and final shoppingList are correct.)
*/

let shoppingList = [                      // Array from REPL
  ['eggs', 'milk', 'butter'],
  ['cleaner', 'trash bags', 'detergent'],
  ['thank you card', 'pens', 'gift wrapping'],
  ['shoes', 't-shirt', 'slacks'],
];

console.log("The initial array:");
console.log(shoppingList);

console.log(" ")
console.log("-----------------------------")
console.log(" ")

// Destructures array so each inner array has its own variable
let [list01, list02, list03, list04] = shoppingList;

console.log("The split our variables, array untouched:");
console.log(list01);
console.log(list02);
console.log(list03);
console.log(list04);


console.log(" ")
console.log("-----------------------------")
console.log(" ")

// Reinitalize the array

console.log("Splice out the array and display it:");
shoppingList.splice(0, shoppingList.length);    // Clean re-initialization

console.log("---- should be no line between this and 'Splice out...' ----");
console.log("The contents of the variables:");
console.log(list01);
console.log(list02);
console.log(list03);
console.log(list04);

console.log(" ")
console.log("-----------------------------")
console.log(" ")

// Add the individual variables back in to form a single array (no inner lists)
shoppingList.push(...list01);
shoppingList.push(...list02);
shoppingList.push(...list03);
shoppingList.push(...list04);


console.log("The re-intialized final array:");
console.log(shoppingList);