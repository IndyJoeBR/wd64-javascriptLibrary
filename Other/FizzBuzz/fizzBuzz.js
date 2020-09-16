/*
! FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:  - 100 range
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - otherwise, prints the number
*/

//  My Version
let FizzBuzz = "";

for(let fb = 0; fb <= 100; fb++) {

  if(fb % 3 == 0) {
    FizzBuzz = FizzBuzz + "Fizz ";
  }

  if(fb % 5 == 0) {
    FizzBuzz = FizzBuzz + "Buzz";
  }
  
  if(FizzBuzz == "") {
    console.log(fb);
  } else {
    console.log(FizzBuzz)
  }
  
  FizzBuzz = "";
}

// Class versions

// Version 1
let phrase;
function check(number) {
    phrase = '';
    if((number%3) == 0) {
        phrase += 'Fizz ';
    }
    if((number%5) == 0) {
        phrase += 'Buzz ';
    }
    if(phrase == '') {
        phrase = number;
    }
    console.log(phrase)
}
for(let i = 1; i <= 100; i++) {
    check(i);
}


// Version 2
for(let fb = 1; fb <= 100; fb++) {
    let fizz = fb%3 == 0;
    let buzz = fb%5 == 0;
    console.log(fizz ? (buzz ? "Fizz Buzz": "Fizz") : (buzz ? "Buzz" : fb) )
}

// Version 3
for(let fb=0; fb <= 100; fb++) {
    if(fb % 15 == 0) console.log('Fizz Buzz');
    else if(fb % 5 == 0) console.log('Buzz');
    else if(fb % 3 == 0) console.log('Fizz');
    else console.log(fb);
}

// Version 4 (short hand - left out the loop)
let fb = 15;
(fb % 3 === 0 && fb % 5 === 0) ? console.log('Fizz Buzz') :
(fb % 5 === 0) ? console.log('Buzz') :
(fb % 3 === 0) ? console.log('Fizz') : console.log(fb);