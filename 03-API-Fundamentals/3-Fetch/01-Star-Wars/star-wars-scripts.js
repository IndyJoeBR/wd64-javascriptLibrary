let starWarsPeopleList = document.querySelector("ul");     // reference to the 'unordered list'

// add the fetch() to the star wars api
fetch('https://swapi.dev/api/people')     // Goes to star wars api endpoint: people
  .then(function(response) {              // get the Body text, calls it 'response'
    return response.json();               // returns 'response' as a JSON object
  })
  .then(function(json) {                  // the returned data is passed into a new function as 'json'
    let people = json.results;            // 'people' = JSONized results from api
    
    for (p of people) {                   // loop through people, 'p' holding that data
      let listItem = document.createElement('li');  // creates a <li> called 'listItem'
      listItem.innerHTML = '<p>' + p.name + '</p>'; // places the HTML inside the <li>
      starWarsPeopleList.appendChild(listItem);    // adds 'listItem' to the <ul> from 1)
    }

  });