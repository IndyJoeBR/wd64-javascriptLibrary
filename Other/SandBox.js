

let myFavMovie = {                                              
  nameOfMovie : 'Pulp Fiction',
  runTime : 178,
  genre : 'Crime, Drama',
  characters : [ charOne = {name : 'Jules Winnfield',
                            age : 45,
                            items : {item1:'gun', item2:'wallet that reads BMF'}},
                 charTwo = {name : 'Vincent Vega',
                            age : 40,
                            items : {item1:'gun', item2:'newspaper'}}
               ]     
                 }
  
console.log(myFavMovie.nameOfMovie);
console.log(`${myFavMovie.runTime} minutes`);
console.log(myFavMovie.characters);
console.log(`${myFavMovie.characters[0].name} has a ${myFavMovie.characters[0].items.item2}.`);




/*
let myFavMovie = {                                              
  nameOfMovie : 'Lord of the Rings: Fellowship of the Ring',      // end of nameOfMovie
  runTime : 228,                                                  // end of runTime
  genre : 'Fantasy',                                              // end of genre
  characters : [ charOne = {name : 'Legolas', age : 2931, items : {weapon:'b&a', head:'braids'}},
                 charTwo = {name : 'Gandalf', age : 2019, items : {weapon:'staff', head:'hat'}}
               ]     
                 }                                                // end of myFavMovie   
  
console.log(myFavMovie.nameOfMovie);
console.log(myFavMovie.runTime);
console.log(myFavMovie.characters);
*/

/*
let netflix = {
  nameOfMovie : 'Lord of the Rings: Fellowship of the Ring',
  runTime : 228,
  season1 : { seasonInfo: { episodeInfo: [{ episode: 1, episodeName: "Pilot"},
                                         { episode: 2, episodeName: "Diversity Day"},
                                         { episode: 3, episodeName: "Health Care"},
                                         { episode: 4, episodeName: "The Alliance"},
                                         { episode: 5, episodeName: "Basketball"},
                                         { episode: 6, episodeName: "Hot Girl"},
                                        ]
                         }
           },
  season2: {},
  season3: {}
};

console.log(netflix.nameOfMovie);
console.log(netflix.runTime);
console.log(netflix.season1);
*/


/*
let myFavMovie = {                                              
  nameOfMovie : 'Lord of the Rings: Fellowship of the Ring',
  runTime : 228,
  genre : 'Fantasy',
  characters : [ charOne = {name : 'Legolas',
                            age : 2931,
                            items : {weapon:'bow & arrow', head:'braids'}},
                 charTwo = {name : 'Gandalf',
                            age : 2019,
                            items : {weapon:'staff', head:'hat'}}
               ]     
                 }
  
console.log(myFavMovie.nameOfMovie);
console.log(`${myFavMovie.runTime} minutes`);
console.log('The characters:');
for(let i = 0; i <= 1; i++) {
  console.log(`  name: ${myFavMovie.characters[i].name}, age: ${myFavMovie.characters[i].age}, item: ${myFavMovie.characters[i].items.weapon}`);
};
*/

