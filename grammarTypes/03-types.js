/*  DATA and STRUCTURE TYPES  */

/*  Primitive Data Types
     - boolean
     - undefined
     - number
     - string
          bigInt
          symbol
    - null
    - Object
    - Function
*/

//  BOOLEANS:  

// Only two possible values: true and false

let on = true;
let off = false;

console.log(on);

//  NULL
//  It is an empty container that has space to fill..
//  It is an 'empty value'

let empty = null;
console.log(empty);


//  UNDEFINED
//  No value has been assigned to a container.

let undef = undefined;
console.log(undef);
let password;
console.log(password);

//  Null is a container with nothing in it.
//  Undefined is a container that was created, but hasn't been worked with.
//     Undefined might suggest a problem or just bad code because it was created, but unused.
//  Null you can trust... undefined you cannot.


//  NUMBERS
//     Just numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);
let rounded = 9999999999999999;
console.log(rounded);
//  JS gives us space for 15 9s before rounding up

let notQuite = 0.2 + 0.1;
console.log(notQuite);
//  This comes out to: 0.30000000000000004

let whatIF = (0.2 * 10 + 0.1 * 10);
console.log("The result:" ,whatIF);
console.log("Then the result divided by 10:", whatIF/10);


//  STRINGs
//  Basically just text.
//  Can be wrapped in single or double quotes.

let doubleQuote = "Double quote";
let singleQuote = 'Single quote';
console.log(doubleQuote, singleQuote);

//  To use a double quote inside a double quote or a single inside a single
//  use the escape character "  \  " before the offending quotation mark.
let singleQ = 'I\'ve';
console.log(singleQ);


//  NUMBERS vs STRINGS
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = "1050" + "100";
console.log(addTheseAlso);

//  Concatenation is like writing 1050 on one sticky note and writing 100
//  on another sticky note and placing them next to each other

//  We can use the operator "typeof" that returns a string that tells us exactly
//  what type the variable is.
console.log(typeof addThese);
console.log(typeof addTheseAlso);

let stringToNumber = Number("1150");
console.log(stringToNumber);
console.log(typeof stringToNumber);


//  OBJECTS
//    - a datatype that can hold multiple data types
//    - objects are used to store many values instead of a singular value
//    - consider these as a collection of various properties
//    - denoted by curly braces { }
//    - data is accessed by using the name of the object, the dot operator, and the key
//            console.log(frodo.race)

let frodo = {
//   key    value  
    race: 'hobbit',     // string
    rings: 1,           // number
    sting: true,        // boolean
}

console.log(frodo);
console.log(typeof frodo);
console.log(frodo.race);


//  ARRAYS
//    - another kind of object
//    - containers the can hold multiple data types
//    - the list of items is separated by commas
//    - they are denoted by square brackets:  [ ]
//    - data is accessed by using the name of the array and the data
//        index in brackets:      console.log(arrayList[2])
//    - the first index is [0]

let arrayList = ['pos 1', 'pos 2', 42];
console.log(arrayList);
console.log(arrayList[2]);
console.log(typeof arrayList);


//  ADDITION vs CONCATENATION
//    - JS sees the "+" symbol in two different ways
//       - when combined with string, it concatenates the strings
//       - when combined with numbers, it uses the math function

let stringExample = "one" + "two" + "three";
let numberExample = 1 + 2 + 3;
console.log(stringExample, numberExample);

//This does NOT work
//    let example = number("one");
//    console.log(number);

//  CHALLENGE *******************************************************************************
/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = "Joseph"
let lastName = "Benson"
let houseNumber = 5360
let aptNumber = "n/a"
let street = "N Park Avenue"
let city = "Indianapolis"
let state = "IN"
let zipcode = 46220

console.log();
console.log(firstName + " " + lastName);
console.log(houseNumber + " " + street + "   Apt: " + aptNumber);
console.log(city + ", " + state + "  " + zipcode);
console.log();


//  STRING PROPERTIES
/*
    - strings have properties/qualities associated with that string
    - eg. the length of the string
*/

let myName = "Joseph";
console.log(myName);
console.log("The length of my name is: " + myName.length);


//  STRING METHODS
/*
    - methods are tools that can help us manipulate our data
*/

let myNameIs = "Joseph";
console.log(myName.toUpperCase());   // puts the string in all upper case
console.log(myName.toLowerCase());   // puts the string in all lower case

let home = "My home is in Indianapolis";
console.log(home.includes("Indianapolis"));
let isHome = home.includes("Indianapolis");
console.log("My home is in Indianapolis.  This is a " + isHome + " statement.");






