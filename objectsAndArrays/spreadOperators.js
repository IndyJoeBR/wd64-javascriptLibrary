/*
**********    SPREAD OPERATOR **********

keyword varName = [...arrayName];

Whenever we are working with an array of values, the spread operator (...) allows us to
use to parse through the array (we step into the array)

****************************************
*/

const nameOne = ['Eric', 'Winebrenner'];
const nameTwo = ['Zach', 'Maynard'];
const copiedNames = ['Adam', 'Jayne', ...nameOne, ...nameTwo];

console.log(copiedNames);

const copiedNamesDiff = ['Adam', 'Jayne', nameOne, nameTwo];
console.log(copiedNamesDiff);

/*

This puts the CONTENTS of nameOne and nameTwo into copiedNames, rather that the array nameOne and nameTwo into the array

So:  [ 'Adam', 'Jayne', 'Eric', 'Winebrenner', 'Zach', 'Maynard' ]

Rather than: ['Adam', 'Jayne', ['Eric', 'Winebrenner'], ['Zach', 'Maynard']]


Since the spread operator is pulling out all items of an array, we need to make sure we use the spread operator within a new array.  

This is so the values that were pulled out gets placed into our new array.

  ...arrName (if not within an array, will throw and error)


*/

nameOne.unshift('Mr');
console.log('Altered: ', nameOne, 'Spread: ', copiedNames);


/*
**********    ... NUMBERS    **********

keyword varName = [...arrayName];

****************************************
*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.49];
//  console.log(Math.min(prices));   ERROR because prices is not a number
console.log(Math.min(...prices));


//  The spread operator "injects" the contents of the array and not the array itself
console.log("-------------------------------------");

const persons = [
  {
    name: 'Lore',
    species: 'Android'
  },
  {
    name: 'Picard',
    species: 'Human'
  }
];

const copiedPersons = [...persons];
console.log('Obj', persons, "SO", copiedPersons);
persons.push({name: 'Worf', species: 'Klingon'});
console.log('Obj', persons, "SO", copiedPersons);

//  There is NO CONNECTION between persons and copiedPersons after you have created copiedPersons

/*
       PASS BY REFERENCE   vs.   PASS BY VALUE


  PASS - BY - VALUE:
  - primitve variable = primitive value
      - strings, number, Booleans, null and undefined

  ex:
    let x = 10;
    let y = 'abc'
    let z = null;

  - JS stores to memory both the variable and the values:

    Variable      Value
       x           10
       y          'abc'
       z          null

  When assigned the variable ACTUALLY becomes equal to the value

    eg.   let a = x;

    a becomes equal to 10.
    a does NOT become equal to x which is equal to 10.

    Later in the code, altering x will not alter b.


  THIS is Pass-by-value... you actually put the value in the new bucket.



PASS - BY - REFEREMCE"

- 3 data types that are passed by reference: array, function, objects
  - these are technically objects
  - non-primitive variables are given a reference to a value, this reference
       points to the location in memory

  ex:

  let arr = [];
  arr.push(1);

  How code looks in memory:

    VARIABLES   VALUES    ADDRESS   OBJECT
       arr      <#001>      #001      []
       arr      <#001>      #001      [1]

  Pass-by-refence keeps ONE memory location for all versions/copies




*/


console.log("-------------------------------------");
copiedPersons[0].name = "Data";
console.log('Obj: ', persons, 'SO:', copiedPersons);



console.log("-------------------------------------");
const comics = [
  {title: 'Spider-man', year: 1962, price: 0.75},
  {title: 'Detective Comics', year: 1939, price: 0.15}
];

console.log("Comics at start:", comics);
console.log("Then we make a copy of 'Comics' called 'copiedComics'.");
const copiedComics = comics.map(comic => ({
  title: comic.title,
  year: comic.year
})
);
console.log("This is copiedComics:", copiedComics);

comics.push("Comics:   ", {title: 'Calvin and Hobbes', year: 1985, price: 1.25});
console.log('Before altering: ', copiedComics);
copiedComics[1].title = 'Detective Comics #27' ;
console.log('After altering:', "Comics:   ", comics, "copiedComics:   ", copiedComics);


