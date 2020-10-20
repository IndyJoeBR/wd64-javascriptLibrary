//ES6 JS Classes

class User {
  constructor(name, password){
    this.name = name;
    this.password = password;
    this.type = "Trial User";
  }

  // Method 1
  greet(){
    console.log("Welcome back, " + this.name);
  }

  // Methods 2
  status(){
    console.log("Current status: " + this.type);
  }
}

// subclass
class BronzeLevelUser extends User {
  constructor(username, password, ccinfo) {       // constructor cannot alone use data from User to get username & password
    super(username, password);                    // 'super' must be used to pull in that data
    this.type = "Bronze User";
    this.ccinfo = ccinfo;
  }

  getInfo(){
    console.log(this.username, this.password, this.type, this.ccinfo);
  }
}


let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();


let bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "4242424242424242");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);   // logs username, password, type and ccinfo; showing the subclass is using the super classe's constructor values
