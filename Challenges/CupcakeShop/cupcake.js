//  What should a cupcake have?
//  needs: cake, icing, price

class Cupcake {
  constructor(icing, cake, price) {
    this.icing = icing;
    this.cake = cake;
    this.price = price;
  }

  getDescription() {
    console.log(`A ${this.icing} topped ${this.cake} cupcake for $${this.price}`);
  }

};  // End of the Cupcake class


/*  APIE
    Abstraction:   hide complicated detail behind an easy interface
    Polymorphism:  one interaction, with many implementations (eg  String.length, Array.length)
              //   no method overload or method overriding
    Inheiritence:  class heirarchy that share functionality and attributes 
    Encapsulation:  

*/

module.exports = Cupcake;


