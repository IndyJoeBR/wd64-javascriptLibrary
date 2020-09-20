let myFavMovie = {                                              
  nameOfMovie : 'Pump Fiction',                                   // end of nameOfMovie
  runTime : 178,                                                  // end of runTime
  genre : 'Crime / Drama',                                        // end of genre
  characters : [ {charOne : {name: 'Jules Winnfield',
                             age: 45,
                             items: [{itemOne: 'Wallet that reads BMF'},
                                     {itemTwo: 'Big gun, very'} ] },
                  charTwo : {name: 'Vincent Vega',
                             age: 35, items: [{itemOne: 'Newspaper'},
                                             {itemTwo: 'Big gun'} ] } }
               ]                                                  // end of characters
                 };                                               // end of myFavMovie   
  
console.log(myFavMovie.nameOfMovie);
console.log(myFavMovie.runTime);
console.log(myFavMovie.characters);
console.log(myFavMovie.characters[0].charOne.name);
console.log(myFavMovie.characters[0].charOne.items[0].itemOne);







/*          ****   ACCURATE VERSION OF SCREEN SCHOT    *****         
let myFavMovie = {                                              
  nameOfMovie : 'Lord of the Rings: Fellowship of the Ring',      // end of nameOfMovie
  runTime : 228,                                                  // end of runTime
  genre : 'Fantasy',                                              // end of genre
  characters : [ {charOne : {name: 'Legolas', age: 2931, items: [{itemOne: 'Bow and Arrow'},
                                                                 {itemTwo: 'Pair of knives'} ] },
                 charTwo : {name: 'Gandalf', age: 2019, items: [{itemOne: 'Spells'},
                                                                 {itemTwo: 'Staff'} ] } }
               ]                                                  // end of characters
                 };                                               // end of myFavMovie   
  
console.log(myFavMovie.nameOfMovie);
console.log(myFavMovie.runTime);
console.log(myFavMovie.characters);
console.log(myFavMovie.characters[0].charOne.name);
console.log(myFavMovie.characters[0].charOne.items[0].itemOne);
*/
