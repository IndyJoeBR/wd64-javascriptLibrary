let x = 10;
console.log(x);

// getElementbyId()   -  NOTE: this ONLY gets the FIRST ID it finds

console.log(document);
console.log(document.body);

//document.getElementById('testParagraph').style.color = 'blue';

let testPara = document.getElementById('testParagraph');

testPara.style.color = "red";

console.log(testPara);

// |------       is testPara     ---------|
// document.getElementById('testParagraph').style.color = "red";


//**********************************************

//  Query Selector All & innerText/innerHTML

console.log(document.querySelectorAll('p.sampleClass'));
// querySelectorAll returns a NodeList
// nodes are items in HTML like elements and text

document.querySelectorAll('p.sampleClass')[2].innerText = "My Text has change!";
document.querySelectorAll('p.sampleClass')[2].id = "No. 3";
console.log(document.querySelectorAll('p.sampleClass')[2]);
// bracket notation to access the array of elements
// innerText allows us to reference or change the text in that element

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
pTag.innerText = 'Using pTag.innerText - My text has changed using a forEach() method.'
//  pTag.textContent = 'Using pTag.textContent - My text has changed using a forEach() method.'

//  pTag.innerHTML = 'Using pTag.innerHTML - My text has changed using a forEach() method.'
});

let showSpan = document.getElementById('spanTest');

console.log("Using .innerText:     " + showSpan.innerText);
console.log("Using .textContent:   " + showSpan.textContent);
console.log("Using .innerHTML:     " + showSpan.innerHTML);

/*
   .innerText
      - simply references or allows us to change the text of a specified element
      - will return only visible text in a 'node'

    .textContent
      - does the same thing as innerText, but will return the full text of a 'node'

    .innerHTML
      - allows us to set text as well as HTML elements, which will be nested inside of the current HTML element referenced
*/

//  EVENT LISTENER - click
//  What to listen for and what to do

let btn = document.getElementById('clickThis');

//console.log(btn);

/*
btn.addEventListener('click', event => {
  event.target.style.backgroundColor = "blue";
});
*/

/* 
    - Create a variable that holds the button element (may need to comment out the above code)
    - Using that variable, make the button toggle between red and blue when clicked.
*/

let currentColor = "blue";

btn.addEventListener('click', event => {

  if(currentColor == "blue") {
    currentColor = "red";
  } else {
    currentColor = "blue";
  };

  console.log(currentColor);

  event.target.style.backgroundColor = currentColor;
});

/*  addEventListener - KEYUP

*/
let input = document.getElementById('nameInput');

input.addEventListener('keyup', event => {
  console.log(event.target.value);
  // console.log(document.getElementsByTagName('p'))
  document.getElementsByTagName('p')[0].innerText = 'Something Changed when I put stuff in a box.';

  if(event.target.value == '') {
    document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...';
  } else {
    document.getElementsByTagName('p')[1].innerText = `Everyone say hello to ${event.target.value}`;
  }
});

// 'event' is only a placeholder-variable... any name will do, but in this case, 'event' is standard



