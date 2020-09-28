/*
***********************************************
                ARRAY DESTRUCTURING
***********************************************

Allows us to unpack values from arrays

  -  allows us to unpack values from arrays or properties from objects
  -  similar syntax as array literals, but is on the left side of the assignment operator
      - this defines what values to unpack
  -  great for pulling infor out of an array/object and assigning that data to it's own variable

*/

const boardGames = ['Catan', 'Pandemic', 'Roll Player'];

//const gameOne = boardGames[0];

const [gameOne, gameTwo, gameThree] = boardGames;

console.log(boardGames);
console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);


/*
***********************************************
                REST SYNTAX
***********************************************

'Rest' syntax look exactly like 'spread' syntax
  -  spread expands an array into its elements
  -  Rest collects multiple elements and condenses them into a single element
  -  MUST be the last element defined when using array destructuring

*/

const hitchHikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: 42}];

let [charOne, charTwo, ...otherInfo] = hitchHikersGuide;
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);

/*   This result is:
    Arthur Dent
    Trillian
    [ 'Babel Fish', { day: 'Thursday', answer: 42 } ]

  Using the spread operator syntax like this is know as 'rest' syntax and array destructuring.
  Using it, we are packing up the REST of the values into an array.
  
*/

hitchHikersGuide.push('Marvin', 'Deep Thought', 'Zaphod Beeblebrox');
[charOne, charTwo, ...otherInfo] = hitchHikersGuide;
console.log(otherInfo);

//  You can also skip information
[charOne, charTwo, , , ...otherInfo] = hitchHikersGuide;
console.log("SKIPPED (happens to skip 'Babel Fish' and the object): ");
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);


/*
***********************************************
                OBJECT DESTRUCTURING
***********************************************

Allows us to unpack values from arrays

  -  allows us to unpack values from arrays or properties from objects
  -  similar syntax as array literals, but is on the left side of the assignment operator
      - this defines what values to unpack
  -  great for pulling infor out of an array/object and assigning that data to it's own variable

*/

/*
const game = {
  title: "Fallout 76",
  developer: 'Bethesda Game Studios',
  platforms: ['PC', 'PS4', 'XBoxOne']
};

const {title, platforms} = game;
console.log(`${title} is on ${platforms}`);
*/

const games = [
  {
      title: 'Fallout 76',
      developer: 'Bethesda Game Studios',
      platforms: [
      'PC', 'PS4', 'XBoxOne'
      ]
  },
  {
      title: 'The Legend of Zelda: Breath of the Wild',
      developer: 'Nintendo',
      platforms: [
      'Nintendo Switch', 'Wii U'
      ]
  },
  {
      title: 'Stardew Valley',
      developer: 'ConcernedApe',
      platforms: [
      'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
      ]
  },
];

const [{title: titleOne, developer: devOne}, ,{title: titleThree}] = games;
console.log(titleOne);
console.log(devOne);
console.log(titleThree);

// Can also loop through it:

for({title, developer} of games) {
  console.log(`${title} is developed by ${developer}`);
};

for({title, platforms} of games) {
  for(p in platforms) {
    console.log(`${title} is on ${platforms[p]}`);
  };
};

