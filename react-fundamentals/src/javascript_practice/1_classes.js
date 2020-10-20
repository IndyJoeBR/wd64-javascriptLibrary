//ES6 JS Classes

class User {                                        // the object name (starts with upper case)
  constructor(name){
    this.name = name;
    this.type = "Trial User";
  }

  // Method 1
  greet(){
    console.log("Welcome back, " + this.name);
  }

  // Method 2
  status(){
    console.log("Current status: " + this.type);
  }

}


// Instance of the class/new object
let anonDude = new User("Anonymous dude");      // this is 'name' in the constructor

// We can now use the instance and the dot-operator
// to access the 2 methods
anonDude.greet();
anonDude.status();

// Another instance of the class
let anonLady = new User ("Anonymous lady");
anonLady.greet();
anonLady.status();

// Another instance of the class
let jeff = new User("Jeff");
jeff.greet();
jeff.status();

// Extra instance #1
let nobody = new User("Nobody Owens");
nobody.greet();
nobody.status();

//Extra instance #2
let IraGershwin = new User("Ira Gershwin");
IraGershwin.greet();
IraGershwin.status();
