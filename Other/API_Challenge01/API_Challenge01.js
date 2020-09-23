const catFactsURL = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=";
let queryURL;     // declared only; instialized after fetch

// DOM ELEMENT REFERENCES
// Select Number of Facts to See
const showQtyFacts = document.querySelector('.qtyOfFacts');
const moreBtn = document.querySelector('.more');
const lessBtn = document.querySelector('.less');

// Results Display
const displaySection = document.querySelector('section');

// Number of results
let qtyFacts = 1;
let maxFactsAllowed = 5;
console.log("Qty facts request:", qtyFacts);

// Event Listeners
moreBtn.addEventListener('click', moreFacts);   // listening +facts button
lessBtn.addEventListener('click', fewerFacts);  // listening -facts button



//  ***  FETCH RESULTS  ***
function fetchResults(queryURL) {         // fetch data from URL
  fetch(queryURL)
  .then(function(response) {            // gets results and passes them into 'response'
    console.log(response);
    return response.json();             // JSONifies 'response'
  })
  .then(function(jsonData) {          // passes results in new function
    console.log(jsonData);
  });
};






//  ***  DISPLAY RESULTS  ***
function displayResults() {
  console


};  //  END OF DISPLAY RESULTS










//  *****   BUTTON FUNCTIONS   *****

function moreFacts(e) {
  if(qtyFacts < maxFactsAllowed) {
    qtyFacts++;
  } else { 
    return;
  }
  updateDiplay(qtyFacts)
};      //  END OF DISPLAY RESULTS


function fewerFacts(e) {   
  if(qtyFacts > 1) {
    qtyFacts--;
  } else { 
    return;
  }
  updateDiplay(qtyFacts)

};      //  END OF DISPLAY RESULTS


function updateDiplay(qtyFacts) {
  queryURL = catFactsURL + qtyFacts;
  showQtyFacts.innerText = qtyFacts;
  fetchResults(queryURL);
  console.log("# of Facts:", qtyFacts);
};


// ***** MAIN *****
queryURL = catFactsURL + qtyFacts;
console.log(queryURL);
//fetchResults(queryURL);