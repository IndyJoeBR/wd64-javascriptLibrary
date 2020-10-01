const Cupcake = require('./cupcake');

class Shop {
  constructor(location, owner) {
    this.location = location;
    this.owner = owner;
  }

  getLocation() {
    console.log(`This shop is at: ${this.location}.`)
  }

  getOwner() {
    console.log(`This shop is owned by: ${this.owner}`)
  }

  changeOwner(newOwner) {
    this.owner = newOwner;
  }
};  // End of Shop class


class CupcakeShop extends Shop {
  constructor(location, owner, name) {
    super(location, owner);   // values inherited from the Shop class
    this.name = name;         // a new value which is the name of the store
    this.inventory = [];      // a default value, but it still forces the variable to exist
    this.cash = 0;            // a default value, but it still forces the variable to exist
  }

  //  This method bakes the count of cupcakes and then adds it to inventory
  bakeBatch(count, batter, icing, price){
    // Make COUNT cupcakes; add COUNT into inventory
    for (let i = 0; i < count; i++) {
      let newCupcake = new Cupcake(icing, batter, price);    // these come in as parameters
      this.inventory.push(newCupcake);
    }
  } //  End of bakeBatch

  //  This method is going to take care of the process of selling a cupcake
  sellCupcake() {
    // Remove cupcake from inventory and increase cash by price of cupcake
    let soldCupcake = this.inventory.pop();       // .pop removes the last array item
    this.cash = this.cash + soldCupcake.price;               // .price from cupcake class
  } //  End of sellCupcake

};  //  End of CupcakeShop

let myShop = new CupcakeShop('Broad Ripple', 'Bill Murray', 'Inzombia Cupcakes');

console.log(`The ${myShop.name} is in ${myShop.location} and owned by ${myShop.owner}.`)

myShop.bakeBatch(12, 'red velvet', 'honey mustard', 4);

console.log(`Its current inventory: ${myShop.inventory}`);
console.log(`Its current cash: ${myShop.cash}`);

myShop.sellCupcake();
myShop.sellCupcake();
myShop.sellCupcake();

console.log(`Its current inventory: ${myShop.inventory}`);
console.log(`Its current cash: ${myShop.cash}`);






