const catFactsURL = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=";
let queryURL;     // declared only; instialized after fetch

// DOM ELEMENT REFERENCES
// Select Number of Facts to See
const showQtyFacts = document.querySelector('.qtyOfFacts');
const btnMore = document.querySelector('.more');
const btnLess = document.querySelector('.less');
const btnGetFacts = document.querySelector('.btnGetFacts');

// Results Display
const displaySection = document.querySelector('section');

// Number of results
let qtyFacts = 1;
let maxFactsAllowed = 5;
//console.log("Qty facts request:", qtyFacts);

// Event Listeners
btnMore.addEventListener('click', moreFacts);   // listening +facts btn
btnLess.addEventListener('click', fewerFacts);  // listening -facts btn
btnGetFacts.addEventListener('click', getFacts);// listening get facts btn


//  ***  FETCH RESULTS  ***
function fetchResults(queryURL) {  // fetch data from URL
  fetch(queryURL)
    .then(function(result) {     // gets results,pass into 'result'
      console.log("First THEN complete!")
      return result.json();        // JSONifies 'result'
    })
    .then(function(json) {       // passes results in new function
      console.log("Second THEN complete!")
      displayResults(json);
      //console.log("Sent to displayResults");
    });
};






//  ***  DISPLAY RESULTS  ***
function displayResults(json) {



  for(let i = 0; i < qtyFacts; i++) {
    console.log(json[i].text);
  }







};  //  END OF displayResults Function





//  *****   BUTTON FUNCTIONS   *****

//  Get Facts button
function getFacts(e) {
  updateDisplay(qtyFacts)
};    // END OF getFacts Function

// One More Button
function moreFacts(e) {
  if(qtyFacts < maxFactsAllowed) {
    qtyFacts++;
  } else { 
    return;
  }
  showQtyFacts.innerText = qtyFacts;
};      //  END OF moreFacts Function

// One Less Button
function fewerFacts(e) {   
  if(qtyFacts > 1) {
    qtyFacts--;
  } else { 
    return;
  }
  showQtyFacts.innerText = qtyFacts;
};      //  END OF fewerFacts Function

// Update Display - the primary execution function
function updateDisplay(qtyFacts) {
  console.log("# of Facts:", qtyFacts);
  queryURL = catFactsURL + qtyFacts;
  console.log("The URL:", queryURL);
  fetchResults(queryURL);
};    // END OF UPDATE DISPLAY
