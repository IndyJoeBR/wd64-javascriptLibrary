//   *****   DECLARATIONS   *****
let playedBefore = false;
let gameLost = false;
let playAgain = "";
let rndNum = 0;
let usersGuess = 0;
let qtyOfGuesses;


//   *****   GAMEPLAY FUNCTIONS   *****

//  Function asks if player would like to play or play again
function shallWePlayAGame() {

  let playGame = window.prompt(`Would you like to play the Guessing Game ${playAgain}? (Y/N)`);

  console.log("Has played before:",playedBefore);    // *************  DELETE  ***********

  if(playGame === "Y" || playGame === "y" || playGame === "Yes" || playGame === "yes") {
    theRules();
  } else if (playedBefore === true) {
    alert("Okay... thank you for playing!");
  } else {
    alert("It is fun... please try playing sometime!")
  };
};    //  End of shallWePlayAGame

//  Function explains the rules, IF the player has not played before
function theRules() {
  console.log("We are now explaining the rules")    // *************  DELETE  ***********

  if(playedBefore === false) {
    console.log("We go to an alert.")    // *************  DELETE  ***********
    alert("The Guessing Game\nI will think of a number between 1 and 10.\nYou only have three opportunities to guess the correct\nnumber, but after each guess, I will give you a hint.");
    playedBefore = true;
    console.log("Has played before:",playedBefore);    // *************  DELETE  ***********
    playAgain = "again";
  };  //  End of rules explanation

  guessTheNumber();
};  //  End of the Rules


//  Function runs the guessing game and, win or lose, sends the user back to the start
function guessTheNumber() {

  rndNum = Math.ceil(Math.random() * 10);
  console.log("The random number is:", rndNum);    // *************  DELETE  ***********
  usersGuess = 0;
  qtyOfGuesses = 0;

  //    Start of DO loop
  do {

  // usersGuess = prompt: user for a guess
  usersGuess = prompt("Guess a number between 1 and 10.")

  usersGuess = parseInt(usersGuess);

  //  IF THE GUESS ISN"T 1-10, RE-PROMPT

  //  Add +1 to qtyOfGuesses
  qtyOfGuesses++;

  if(usersGuess === rndNum) {
    alert("THAT IS CORRECT!  Great job!");
    break;
    } else if (qtyOfGuesses === 3) {
      alert(`I'm sorry.  You have used your third and final chance.\n\nYour last guess was ${usersGuess}, but the correct answer was ${rndNum}.`);
     } else if (usersGuess > rndNum) {
      alert("Not quite... trying guessing lower.");
      } else {
        alert("Not quite... trying guessing higher.");
      };

  } // End of DO statement
  while(qtyOfGuesses < 3);      // WHILE ends when player has used 3 guesses
  
  shallWePlayAGame();
};  //  End of guessTheNumber








//   *****   MAIN CALL   *****
shallWePlayAGame();