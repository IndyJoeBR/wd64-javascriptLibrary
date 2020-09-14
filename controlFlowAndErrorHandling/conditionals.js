/*    *****   CONDITIONALS   *****

*** FALSY VALUES
   - false
   - 0
   - "", '', ``
   - null
   - undefined
   - NaN (Not A Number)

  When JS is expecting a boolean and it gets one of the above instead, it is considered "falsy"

*/




/*    ***   IF   ***

IF something is true, do this thing.

*/

let light = "on";

if (light == "on") {
  console.log('The light is on');
  // can add much more here
}

let temperature = 68;

if (temperature <=70) {
  console.log('Wear a jacket');
}

let rain = false;

if (temperature < 70 && rain != false) {                  // this could also be:   rain == true   OR    it could just say rain (because rain is t/f)   OR    !false
  console.log("Its a little chilly and might rain.");
}

console.log(); console.log();    // eye-pleasing spaces

/*    ***   IF / ELSE  ***

IF something is true, do this thing,
(if not) ELSE, do this other thing.

*/

let todaysTemp = 75;

if (todaysTemp < 70) {          //  This statement is either true or false
  /* TRUE */   console.log("It is " + todaysTemp + ", wear a jacket");
} else {
  /* FALSE */  console.log("It is " + todaysTemp + ", no jacket needed.");
};

console.log();    // eye-pleasing spaces


// CHALLENGE

let myName = "Joseph Benson";

if (myName == "Joseph Benson") {
  console.log("Hello, my name is " + myName + ".");
} else {
  console.log("Hello, what is your name?");
};

console.log();    // eye-pleasing spaces


/*    ***   ELSE IF  ***

IF something is true, do this.  Otherwise (ELSE),
when it is FALSE, do this, or this, or this.

*/

let cookTime = 40;

if(cookTime === 45) {
  console.log('Let us feast!');
} else if (cookTime >= 30) {
  console.log(`It has only been ${cookTime} minutes.  Wait another 5-15 minutes.`);
} else if (cookTime >= 30) {
  console.log(`It has only been ${cookTime} minutes.  Wait another 10-25 minutes.`);
} else {
  console.log(`It has only been ${cookTime} minutes.  Perhaps at least try cooking it...`)
}


console.log();    // eye-pleasing spaces


//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let yourAge = 51;

if(yourAge >= 25) {
  console.log(`You can rent a car!.`);
} else if(yourAge >= 21) {
  console.log(`You can drink!.`);
} else if(yourAge >= 18) {
  console.log(`You can vote!.`);
} else {
  console.log(`Sorry, you're too young to do anything.`);
 }

 console.log();    // eye-pleasing spaces


/*    ***   TERNARIES  ***

  - A quick way of writing out a if/else statement
     - we are capable of writing out our condition in a simple line
     
*/

let Name = "Fred";

if (Name == "Fred") {
  console.log("Hello, my name is " + myName + ".");
} else {
  console.log("Hello, what is your name?");
};

//    CONDITION, if true: abc, else (false:) xyz

let myNewName = "Joey";
myNewName === 'Joey' ? console.log("Hello, my name is " + myNewName + ".") : console.log("Hello, what is your name?");
//   condition              if true statement                                       else (if false) statement

console.log();    // eye-pleasing spaces


//! CHALLENGE
// Take this if/else statement and make it into a ternary.
console.log('The after lunch challeng, instructor version:');
let lampOn = false;
let daytime = true;
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
  console.log('The lamp is off during the night')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}

console.log();    // eye-pleasing spaces
console.log("The ternary version");
lampOn == true && daytime != true ? console.log('The lamp is on during the night') : lampOn != true && daytime != true ? console.log('The lamp is off during the night') : lampOn == true && daytime == true ? console.log('The lamp is off during the night') : lampOn != true && daytime == true ? console.log('The lamp is off during the day') : console.log('What lamp?');


console.log();    // eye-pleasing spaces

/*    ***   SWITCH  ***

  - Executes a block of code depending on different cases.
     
*/

let instructor = "Ing";

switch(instructor) {
  case "Ing" :
    console.log(`${instructor} is part of the Web Dev Team.`);
    break;
  case "Zack" :
    console.log(`${instructor} is part of the Web Dev Team.`);
    break;  
  case "Josh" :
    console.log(`${instructor} is part of the Web Dev Team.`);
    break;
  default:
    console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);  
}

//  alternately...

instructor = 'Amanda';

switch(instructor) {
  case 'Ing':
  case 'Adam':
  case 'Eric':
    console.log(`${instructor} is part of the Web Dev team.`);
    break;
  case 'Josh':
  case 'Amanda':
  case 'Casey':
    console.log(`${instructor} is part of the Software Dev team.`);
    break;
  default:
    console.log(`${instructor} does not seem work here.`);
}



