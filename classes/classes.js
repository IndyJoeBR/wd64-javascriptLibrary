/*
******************
    CLASSES
******************

  - introduced in ES5
  - Classes can be defined by either expression or declaration
  - Classes are functions

  - A blueprint for creating new objects (instances of a class)

      ex: model could be property of a class called Automobile
          - each new automobile we create that's a copy of our
            original class and could have a different value for
            the property model
      
  - Body of the class is always inside curly-braces {}   (just like a function)

  - Constructor method is used to create and initialize an object
       that was created with a class
       -  There can be only ONE constructor method
       -  Can use the keyword 'super'
       -  'super' keyword is used to access and call functions on an object parent

  - Introduced in ES5
    - New way to write previous existing prototype-based inheritance
    - CLoest thing in vanilla JS to OOP (Object Oriented Programming)

*/

/*
******************
    CLASS DECLARATION
******************
*/

class Automobile {
  constructor(make, model) {
    // instanced properties must be defined inside of class methods, like the constructor method
    this.make = make;
    this.model = model;
  }
}

// NOTE:  Hoisting... unlike function delcarations, class declarations are not hoisted
//            A class declaration needs to be declared before accessing it. 


/*
******************
    CLASS EXPRESSION
******************

  - can be named or not
  - the name given to an unamed class expression is local to the class's body
      - the name of a named class can be retrieved through the class's name property

*/

// unamed class:
let Vehicle = class {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
};

console.log(Vehicle.name);    // class name will be 'Vehicle'... the variable name

// named class
let Auto = class Mobile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
}
};

console.log(Auto.name);     // class name will be 'Mobile'


/*
******************
    Methods
******************

  - Introduced in ES5
    - prototype methods are shorter for method definitions



*/

// OLD SYNTAX:
const automobile = {
  start: function() {
    //
  },
  stop: function() {
    //
  }
};


// Prototype Method: NEW SYNTAX  (basically... got rid of the word 'function')
const autoMobile = {
  start() {
    //
  },
  stop() {
    //
  }
}

// FULL CLASS CONSTRUCTION

class AutoMobile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method 1
  start() {
    console.log(`This ${this.make} ${this.model}'s engine started.`);
  }

  stop() {
    console.log(`This ${this.make} ${this.model}'s engine stopped.`)
  }
};


/*
******************
    NEW (instance)
******************

  - using the keyword 'new' we can create a new object (instance of a class)

*/

// new object/instance of the class AutoMobile
let hondaCivic = new AutoMobile('Honda', 'Civic');

// the methods can then be accessed through dot notation:     class.method
hondaCivic.start();
hondaCivic.stop();

let fordEscape = new AutoMobile('Ford', 'Escape');
fordEscape.start();
fordEscape.stop();



/*
******************
    CONSTRUCTOR METHOD
******************

  - helps create and initialize an object created by a class
  - works along with the 'new' keyword
  - needs to be included to create new objects and instances of our class
    - set properties
    - passes values for properties

*/

class Cookie {
  constructor(type, icing, shape) {
    this.t = type;    //
    this.i = icing;   //   parameters noted will be values we want passed and stored in the object
    this.s = shape;   //
    // LEFT SIDE: assigning keys for the values we pass in
            // RIGHT SIDE: the accepted values from our parameters
  }
};

let chocolateChip = new Cookie('chocolate chip', false, 'circle');
// console.log(chocolateChip.type)    doesn't work, 't' is the method
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);
console.log(chocolateChip);


/*
******************
    EXTENDS
******************

  - keyword used in class declaration/expression to create a new class
  - each new class created inherits the properties and methdos from the parent class
  - can have it's own properties and methods
    - also known as a subclass


*/

//  PARENT CLASS
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eats their food.`);
  }
};

//  SUBCLASS
class Dog extends Animal {
  constructor(name, breed) {
    super(name);                // instead of THIS
    this.type = breed;
  }

  play() {
    console.log(`The ${this.type} named ${this.name} fetches the ball!`);
  }
};

let Fido = new Dog('Fido', 'mutt');
Fido.eat();
Fido.play();
// Animal.play();      breaks because .play() doesn't have access to the parent class













