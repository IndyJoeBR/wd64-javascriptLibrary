/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

const pig = "another sentence to pig latinize";             // our string

let phrase = pig.toLowerCase();             // converts to lower case

let phraseArray = phrase.split(" ");        // converts phrase to an array
let finalPhrase = "";                       // declares returned array

let lastLetter = "";                        // declares the last letter(s)

console.log("Starting phrase: ", phrase)

function parseThroughPhrase(phrase) {

  let index = 0;                            // creates index 

  for(word of phrase) {                     // Iterates through each string(word) in the array

    let firstLetter = word[0];              // grabs the first letter of the word

    // Determines if first letter is a vowel, if not creates a new variable of the first
    //    letter and "-ay"
    switch (firstLetter) {
      case(firstLetter === "a" || firstLetter === "A"):
      case(firstLetter === "e" || firstLetter === "E"):
      case(firstLetter === "i" || firstLetter === "I"):
      case(firstLetter === "o" || firstLetter === "O"):
      case(firstLetter === "u" || firstLetter === "U"):
        lastLetter = "ay";
        break;
      default:
        lastLetter = firstLetter + "ay";
    };
    
    //  add lastLetter to word
        word = word + lastLetter;               // adds lastLetter to our word

    // insert lastLetter and index wordLength
    let endSlice = word.length;

    word = word.slice(1, endSlice)

    // replace word in phrase array with new word
    phrase.splice(index,1,word);

    index = index + 1;

    };      // End of word conversion

  return phrase;
};      //  End of Word conversion


finalPhrase = parseThroughPhrase(phraseArray);    // Calls main function

finalPhrase = phraseArray.join(" ");              // Rejoins final array

console.log("Converted phrase: ",finalPhrase);                         // Logs final array