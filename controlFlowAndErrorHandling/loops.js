/* *****  LOOPS   ***** 

Allow us to repeat code without writing a lot

To do so:

   1) create an index
   2) run a condition
   3) change the indexing variable
   -  and execute code


 *****  FOR loop   ***** 
for(let i = 0; i <= 10; i++) {
  console.log(i);
}
*/

// CHALLENGE

//  Using a for loop, set an index to 2.  
//  Make a condition where, if that number is greater than -10, change that index by subrating 4
//  Log the interation
/*
for(let i = 2; i > -10; i = i - 4) {
  console.log(i);
}
*/


let word = "ReallyLongWord";

for(let i = 0; i < word.length; i++) {
  console.log(i, word[i]);
}

console.log()   // EYE-PLEASING SPACING

/* *****  FOR-IN loop   ***** */

let city = {
  name: "Indy",
  pop: 877000,
  speedway: true
};

for(info in city) {
  console.log(info);
  console.log(city[info]);
}

//   FOR-IN with an array

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list) {
  console.log(item);
  console.log(list[item]);
}

console.log()   // EYE-PLEASING SPACING
console.log()   // EYE-PLEASING SPACING


//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.

//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let name = 'piCard';
let letterToChange;
let finalName;

for(letter in name) {
  //  console.log(letter, name[letter]);
  letterToChange = name[letter];
  //  console.log(letterToChange)
  if(letter == 0) {
    console.log(letterToChange.toUpperCase());
    finalName = finalName + letterToChange.toUpperCase()
  } else {
    console.log(letterToChange.toLowerCase());
    finalName = finalName + letterToChange.toLowerCase();
  }
}

console.log(finalName);

console.log()   // EYE-PLEASING SPACING

//  ALTERNATELY

let theName = "piCard"
let fullName = "";     //  If this is just declared and not initialized, it produces and 'undefined' from 96 if you add fullName = fullName + changes
for(character in theName) {
  character == 0 ? fullName = fullName + theName[character].toUpperCase() : fullName = fullName + theName[character].toLowerCase();
  //console.log(fullName);
}
console.log(fullName);



/* *****  FOR-OF loop   *****

   -  In order to run a FOR OF loop, the "thing" must be numbered like an array

    let object = {
      key: value,
      key: value,
      key: value,
    }

    for(o of object) {         o is the placeholder/variable

    }

*/

let indexArr = ["spot 1", 2, true, "four"];

for(pos of indexArr) {
  console.log(pos);
}

/*  RECAP    

  for loop - loops through a block of code until the counter reachers a specified number
  for-in loop - loops through properties of an object
  for-of loop - loops over iterable objects as arrays and strings
                 NOTE: strings are like arrays and each character has an index value

*/