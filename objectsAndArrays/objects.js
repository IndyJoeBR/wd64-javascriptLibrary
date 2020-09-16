//  *****   OBJECTS   *****

let netflix = {
  id: 1,
  name: "The Office",
  season1: {
      seasonInfo: {
          episodeInfo: [{
                  episode: 1,
                  episodeName: "Pilot"
              },
              {
                  episode: 2,
                  episodeName: "Diversity Day"
              },
              {
                  episode: 3,
                  episodeName: "Health Care"
              },
              {
                  episode: 4,
                  episodeName: "The Alliance"
              },
              {
                  episode: 5,
                  episodeName: "Basketball"
              },
              {
                  episode: 6,
                  episodeName: "Hot Girl"
              },
          ]
      }
  },
  season2: {},
  season3: {}
};

//  DOT NOTATION
//    Data is accessed using 'dot notation'

/*
console.log('All Data', netflix);
console.log('Just Season Info', netflix.season1.seasonInfo);
*/

//  We can use bracket notation as well
console.log('Episode: ', netflix.season1.seasonInfo.episodeInfo[3].episodeName);


/*   JSON objects
       -  JSON: JavaScript Object Notation
       -  The JSON syntax is drvied from JS Object Notation syntax, but the JSON format is text only
       -  JSON exists as a string - useful when you want to fetch data from a server
             -  data on a server, or anywhere, is basically string and needs conversion for use
       -  needs to be converted to a native JS object if you want to access it


*/

let spaceJam = {
  toonSquad: {
    human: 'Michael Jordan',
    rabbit1: 'Bugs',
    rabbit2: 'Lola',
    duck: 'Daffy',
    tDevil: 'Tasmanian Devil',
    bird: 'Tweety',
    cat: 'Sylvester',
    pig: 'Porky'
  }
}

//  Object.keys() will return an array of 

console.log(Object.keys(spaceJam.toonSquad));                // returns a string of Keys
console.log(Object.keys(spaceJam.toonSquad.tDevil));         // returns a string of index numbers for the element

/*   Object Bracket Notation
      -  object bracket notation can also allow us to find a value in an object
      -  using object brack notation can be handy if we want to store a key in a variable
            and then use that variable to parse through an object
      -  this works because ALL keys in an object are STRINGS
*/

let garden = {
  vegetable: 'zucchini',
  flower: 'sun flower',
  fruit: 'grape',
  water: true,
  sun: true,
  size: '10'
};

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

//  DOT notation
console.log(garden.vegetable);

//  Square Bracket 
let flowerType = garden['flower'];
console.log(flowerType);

let fruitTypeDOT = garden.fruit;           // using DOT notation
let fruitTypeBRACKET = garden['fruit'];    // using BRACKET notation (the key is in quotes here because it's a string)
console.log(fruitTypeDOT);
console.log(fruitTypeBRACKET);

//  We are accessing the keys within our object in two specific ways


let garden2 = {
  vegetable: 'zucchini',
  flower: 'sun flower',
  fruit: 'grape',
  water: true,
  sun: true,
  size: '10'
};

let baking = {};          //  creates an empty object
baking['zucchini'] = 'better make some bread';       // adds a key (zucchini) and its value (better make some bread)
console.log(baking);      //  prints out the contents of the baking object

console.log(baking[garden2['vegetable']]);     // here we are saying the same thing as we did above, except we
                                               // are passing information from our object   garden['vegetable']
                                              // is the same as 'zucchini' up above

console.log(Object.keys(baking));




