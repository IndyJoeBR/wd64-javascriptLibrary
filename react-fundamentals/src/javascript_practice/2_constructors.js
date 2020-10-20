//ES6 JS Classes

class User {
  constructor(name){
    this.name = name;
    this.type = "Trial User"
  }

  // Method 1
  greet(){
    console.log("Welcome back, " + this.name);
  }

  // Methods 2
  status(){
    console.log("Current status: " ) + this.type);
  }
}

