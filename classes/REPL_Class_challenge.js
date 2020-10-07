/*
Create a class named Polygon that contains the following information:

A constructor method with a parameter to capture information (hint: this should be capturing an array of numbers).  
assign the parameter to a key using 'this' 
Has a method named perimeter, that should do the following:  
return ONLY the parameter, or an empty array from the method
call the reduce method on your return value to get a single output value
Create a new object/instance of the class Polygon that is stored in a variable.

The new Polygon should accept an argument that is an array of 4 numbers
console.log the return value from the newly created Polygon.
p = 3 + 3 + 8 + 8. Since this is a rectangle, the  opposite sides have the same lengths, 3 cm. and 8 cm. Add up the lengths  of all four sides to find the perimeter.

*/


// create a class called Polygon
class Polygon {

  // create a constructor that accepts an array
  constructor (foursides) {
  // assign that parameter using this.
    this.foursides = foursides;
  };

  // create a method call perimeter
    // it returns only the parameter
  perimeter () {
    return this.foursides;
  };



};
// create a new a new object of the Polygon class that is stored in a variable
  // the new Polygon object should accept an argument that is an array of 4 numbers
let myShape = new Polygon([3, 3, 8, 8]);

let x = myShape.perimeter();
// console.log the return value 
console.log("The returned value is:", x);

//SOMEWHERE
console.log("The perimeter of the polygon is:", x.reduce(addTheNumbers,0));

// IMPLIED function adds the 4 sides to get the perimeter
//x.reduce() requires a function, so it must be there somewhere

function addTheNumbers(input, initialValue) {
  return input + initialValue;
};
