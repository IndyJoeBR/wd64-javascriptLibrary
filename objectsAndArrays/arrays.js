/* *****   ARRAYS   *****
     - JS begins its array index at 0
     -      (so the first sample below is [0-2])
     - We access data in the array by using its name, followed by an index # in brackets
     -      (this is called 'square bracket notation')
     - an array is an OBJECT data type

*/

// POPULATING & REFERRING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);
console.log(list instanceof Array);


let firstStudents = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];



console.log(typeof firstStudents);
console.log(firstStudents instanceof Array);

let b = "this is a string";
console.log(b instanceof String);

console.log();

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];

console.log(`Hello ${students[1]}`);
console.log(`Hello ${students[6][2]}`);



console.log();
//  ARRAY METHODS
//     multiple methods allow us to manipulate arrays as we may need

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];
for (foodItem of food) {
  console.log(foodItem);
}


// Add (append to the end) of the array:    .push
//  PUSH is used

food.push('pizza');  // Appends 'pizza' to the end of the array
console.log('push', food);

//  Remove and insert:    .splice
food.splice(1,1, 'banana');

//  that is array-name.splice(starting-index, positions-affected-starting-at-start, 'new-data');
//   -  starting at index-1,
//   -  index 1 (and only 1) is replaced by
//   -  the data given


// Remove from end:    .pop
food.pop();    //  .POP removes the last item of an array

// Adds to the start of the array:    .unshift
//   -  inserting, starting a index-0):
food.unshift('popcorn', 'steak');

// Remove from start:   .shift
food.shift();    //  .SHIFT removes the first element (index-0) from the array
                 //  the remaining elements 'shift' to the left


//  Number of values ('elements') in an array:     .length

let long = [1,6,3,78,34,8,4];
console.log(long.length);



//  ITERATING
//
//   for-each
//      - the forEach() method executes a provided functiononce for each element in an array
//            - this is similar to the way for-of iterates through the array
//      - it uses three arguments
//      


let foodList = ['apple', 'pear', 'msuhroom', 'cheese', 'peach'];

//  This uses a for loop to go through the array by index number:
//  for(let i = 0; i < foodList.length; i++) {
//    console.log(i, foodList[i])
//  }

//  We invoke callback function for each element within our array.
foodList.forEach((foodItem, index, nameOfTheArray) => {
  console.log(foodItem);
  console.log(index);
  console.log(nameOfTheArray);
});

//  OR

foodList.foreEach(logItem);

//  A 'callback' function is another function we invoke within our main function

/*
Syntax for the 'callback' function:
   function print(callback) {
     callback();
   }
*/

console.log();



/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let moviesList = ['Ghost', 'Indiana Jones', 'Superman', 'Captain America: the First Avenger', 'Superbad'];

//  The 'callback' function
function printMoviesList() {
  console.log(moviesList);
}

moviesList.forEach(printMoviesList);

moviesList.push('Iron Man');
moviesList.splice(0,1,'The Hulk');

moviesList.forEach(printMoviesList);


//  Working verision

let moviesList = ['Ghost', 'Indiana Jones', 'Superman', 'Captain America: the First Avenger', 'Superbad'];

console.log('before: ');
moviesList.forEach(moviesList => console.log(moviesList));


moviesList.push('Iron Man');             //  Adds 'Iron Man' to the end of the array
moviesList.splice(0,1,'The Hulk');       //  Replaces 'Ghost' with 'The Hulk'

console.log();
console.log('after: ');
moviesList.forEach(moviesList => console.log(moviesList));

console.log();
console.log('And the same with a function: ');
moviesList.forEach(printListOfMovies);

function printListOfMovies(theMovie, itsIndex) {
  console.log(itsIndex, theMovie);
}


