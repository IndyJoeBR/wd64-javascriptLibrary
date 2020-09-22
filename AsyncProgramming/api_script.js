// console.log('test');

// URL for API: https://api.spacexdata.com/v2/rockets

const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

// event listener, on 'submit' invokes function
searchForm.addEventListener('submit', fetchSpace);



// fetch() function
function fetchSpace(e) {   // 'e' is just a variable name to hold whats sent to it
  e.preventDefault();      // prevents browser from refreching
  // console.log('Clicked');

  fetch(baseURL)           // starts the process of fetching from our resource
    .then(results => {
      console.log("Before json formatting:", results);
      return results.json()   // method takes in a response (results), reads to completion and returns the results in a json format
    })
    .then(json => {
      displayRockets(json)     // pass JSON to function
    })
    };                        // end of fetch


    //   DISPLAY FUNCTION
    function displayRockets(data) {
      console.log('DisplayRocket:', data);

      let rockets = data.forEach(r => {   // forEach r(ocket), cycle through the array of (in this case), objects in the array
        console.log(r);
        let rocket = document.createElement('li');   // create a li tag
        rocket.innerText = `${r.name} is in the country ${r.country}, its first flight was (will be) ${r.first_flight}`;    // steps into the object inject that value into the li
        spaceShips.appendChild(rocket);   // and then append (put) that 'li' at the end of 'ul' we found for spaceShips (line 8)

        //  Look at the result in the 'inspect source' console and how it then appears in the browser window

      });

    }