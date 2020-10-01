//   *****   DECLARATIONS   *****
let playedBefore = false;     // Repeating play; no rules required
let gameLost = false;         // 3 guess used; game is lost
let playAgain = "";           // puts 'again' in request to play again for previous player
let rndNum = 0;               // random number to guess
let usersGuess = 0;           // the users guess
let qtyOfGuesses;             // number of guesses the user has made
let guessIsValid = false;     // check on validty of user's guess


//   *****   GAMEPLAY FUNCTIONS   *****

//  Function asks if player would like to play or play again
function shallWePlayAGame() {

  let playGame = window.prompt(`Would you like to play the Guessing Game ${playAgain}? (y/n)`);

  if(playGame === "Y" || playGame === "y" || playGame === "Yes" || playGame === "yes") {  // accepts version of 'yes'
    theRules();
  } else if (playedBefore === true) {
    alert("Okay... thank you for playing!");    // Message to leaving player
  } else {
    alert("It is fun... please try playing sometime!")    // Message to departing non-player
  };
};    //  End of shallWePlayAGame



function theRules() {                       //  Function explains the rules, only
                                            //    IF the player has not played before
  if(playedBefore === false) {
    alert("The Guessing Game\nI will think of a number between 1 and 10.\nYou only have three opportunities to guess the correct\nnumber, but after each guess, I will give you a hint.");
    playedBefore = true;                    //  Sets having played before to 'true'
    playAgain = "again";                    //  Set again for playGame prompt
  };  //  End of rules explanation

  guessTheNumber();                         //  Calls main guessing game function
};  //  End of the Rules



function guessTheNumber() {                 //  Function runs the guessing game and, win or 
                                            //     lose, sends the user back to the start
  rndNum = Math.ceil(Math.random() * 10);   //  Think of a number
  usersGuess = 0;                           //  Reset guesses
  qtyOfGuesses = 0;                         //  Reset quantity of guesses
  guessIsValid = false;                     //  Reset validity of guess

  //    Start of DO loop
  //      The loop takes user input and then checks to make sure it
  //      a number between 1 and 10.  If not, the ask/validate loop repeats.
  do {

    while (guessIsValid === false) {
  
      usersGuess = prompt("Guess a number between 1 and 10.")   // prompts user for guess
    
      usersGuess = parseInt(usersGuess);                        // parses guess to an integer
          
      if(usersGuess < 1 || usersGuess > 10 || isNaN(usersGuess) === true ) {
          alert(`I'm sorry, that is not a valid response.\n\nPlease try again.`);
      } else {
          guessIsValid = true;        //  Sets the validty of guess to true so loop ends
            }

    };  //  End of while loop
  
    guessIsValid = false;                     //  Reset validity of guess after validation

    qtyOfGuesses++;                           //  Increase guesses used

    if(usersGuess === rndNum) {
      alert("THAT IS CORRECT!  Great job!");
      break;
      } else if (qtyOfGuesses === 3) {        // if user has used 3 guess, game is over
        alert(`I'm sorry.  You have used your third and final chance.\n\nYour last guess was ${usersGuess}, but the correct answer was ${rndNum}.`);
      } else if (usersGuess > rndNum) {
        alert("Not quite... trying guessing lower.");         //  Alert window if user guess is high
        } else {
          alert("Not quite... trying guessing higher.");      //  Alert window if user guess is low
        };

  } // End of DO statement
  while(qtyOfGuesses < 3);      // WHILE ends when player has used 3 guesses
  
  shallWePlayAGame();           // Win or lose, goes back to start of the game
};  //  End of guessTheNumber


//   *****   MAIN CALL   *****
shallWePlayAGame();