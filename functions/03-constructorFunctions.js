/*   *****  CONSTRUCTOR FUNCTIONS   *****

- Constructor Functions allow us to easily create a unique solution for different circumstances
  by using parameters.
     - creating several different objects with the same keys but different values


*/

// Option 1
//  objects painfully constructed one at a time

let person1 = {
  name: 'Macy',
  age: 24,
  canVote: true
};
let person2 = {
  name: 'Jeremy',
  age: 15,
  canVote: false
};
let person3 = {
  name: 'Tyler',
  age: 38,
  canVote: true
};


// Option 2
// (1)     (2)  (      3          )
function Person(name, age, canVote) {
//  (4)  (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//console.log(typeof Person);
//            (7)   (8)
let person4 = new Person('James', 80, true);
console.log(person4);

/*
     1.  The keyword (function)
     2.  The function Name... for constructor functions, it should be capitalized
     3.  The parameters; these will be the values of the object was through the function
     4.  'this' keyword, gives us the ability to refer back to whatever called it, or whatever
             activates it.  In this case, 'this' refers to 'Person'
     5.  This will be a key of the new object we will create.  This is NOT referring to the parameter.
     6.  This is referring to the parameter we pass through our constructor function.
     7&8 This 'new' keyword is calling our Person function, creating a new person with the values
             we pass as arguments and storing that person in a variable.
*/
