/*
let randomNumber = 0;
let FloorNum = 0;
let CeilNum = 0;

  for(let i = 0; i <=10000000; i++) {

    randomNumber = Math.random() * 100;

    FloorNum = 1 + Math.floor(randomNumber);
    CeilNum = Math.ceil(randomNumber);

    //console.log(FloorNum);
    //console.log(CeilNum);

  // console.log(randomNumber);
    //console.log(`Floor Number(+1)= ${FloorNum}  =   ${CeilNum} Ceiling Num`);

    if(FloorNum !== CeilNum) {
      console.log("******  NOT EQUAL  ********");
  };

};

console.log("Done 10,000,000 tests")




let alphabet = ['abc', 'bcd', 'cde', 'def', 'efg', 'fgh', 'ghi', 'hij', 'ijk', 'jkl', 'klm', 'lmn', 'mno'];

for(let index = 0; index <= 13; index++) {
  let letterIs = alphabet[index];
  console.log('The letter is:', letterIs);
  let parsedLetterIs = parseInt(letterIs,10);
  console.log('... Parsed it is:'. parsedLetterIs);
}
*/

/*
var a = parseInt("10") + "<br>";
var b = parseInt("10.00") + "<br>";
var c = parseInt("10.33") + "<br>";
var d = parseInt("34 45 66") + "<br>";
var e = parseInt(" 60 ") + "<br>";
var f = parseInt("40 years") + "<br>";
var g = parseInt("He was 40") + "<br>";

var h = parseInt("10", 10)+ "<br>";
var i = parseInt("010")+ "<br>";
var j = parseInt("10", 8)+ "<br>";
var k = parseInt("0x10")+ "<br>";
var l = parseInt("10", 16)+ "<br>";

var n = a + b + c + d + e + f + g + "<br>" + h + i + j + k +l;
console.log(n);
*/

let aPrime = "10";

console.log(aPrime + " is a type of " + typeof aPrime);

let a = parseInt(aPrime);

console.log(a + " is a type of " + typeof a);
