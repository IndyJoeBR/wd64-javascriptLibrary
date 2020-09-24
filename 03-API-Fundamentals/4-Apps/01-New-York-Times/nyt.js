//  *****   VARIABLE DECLARATIONS   *****
//  API DATA
/*  1) declare the baseURL of the API - the API end for the NYT data
    and 2) adding the key from the NYT;
    3) just declaring url (it is intialized in fetchResults)
*/

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';  // NYT endpoint
const key = 'AgRGQivYLCNUNJpdiHPKjkn0MP4PG1gG';                              // NYT key
let url;                                  // Declaration only, initialized in fetchResults

//  REFERENCES TO DOM ELEMENTS
//  Search Form (references to classes in the form and the form itself)
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//  Results Navigation (references to the nav and its buttons)
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//  Results Section
const section = document.querySelector('section');

//  Set initial style of the nav variable to none
//  (this hides the Previous/Next buttons for the time)
nav.style.display = 'none';

// Set Pagination and display (again... convenient for now)
let pageNumber = 0;
let displayNav = false;

//  EVENT LISTENERS
searchForm.addEventListener('submit', fetchResults);    // listening for 'submit'
nextBtn.addEventListener('click', nextPage);            // listening for nextPage button
previousBtn.addEventListener('click', previousPage);    // listening for previousPage button


//  *****   FETCH RESULTS   *****
//  This is an event-handling function
function fetchResults(e) {        // 'e' is will be the object we are working with
  console.log(e);                 // log the object ('e') so we can look at it in the console
  e.preventDefault();             // prevents request from actually being sent, stops refresh
      // Below the full URL is assembled by concatenating a string
      // This URL is going to take use directly to our result so we can access the data
  url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  console.log(url);               // log the url string to oggle at the beautiful concat

  /* EXAMPLE - The resulting URL for 'javascript' is:
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=AgRGQivYLCNUNJpdiHPKjkn0MP4PG1gG&page=0&q=javascript
*/

  // Adding optional dates to fetch results
  if(startDate.value !== '') {                // if a start date is added, 
    console.log(startDate.value);             // print it to the console and
    url += '&begin_date=' + startDate.value;  // append it to the end of the URL
  };

  if(endDate.value !== '') {                  // if an end date is added
    console.log(endDate.value);               // print it to the console and
    url += '&end_date=' + endDate.value;      // append it to the end of the URL
  };

  console.log(url);

  fetch(url)                      // give our search url to fetch and
    .then(function(result) {      // when the promise it creates is resolved
    console.log(result)           // we log those results ('result')
    return result.json();         // and convert those results into a json object
  })                              // once that promis is resolved
    .then(function(json) {        // the json is passed to a new function that then
      displayResults(json);       // moved the console.log to a displayResults() function
  });

}                                 //  END of fetchResults function


//  *****   DISPLAY RESULTS   *****
// The fetchResults function passes the json-object ('json') to this displayResults function
function displayResults(json) {

  // WHILE LOOP cycles through the section, deleting previous search results
  while (section.firstChild) {                // while there is a firstChild in the section it loops
    section.removeChild(section.firstChild);  // each time it clears out the firstChild 
  }                                           // finally its empty; removing previous search results

  let articles = json.response.docs;      // creates 'articles' as a reference to the json results

  // IF-ELSE shows or hides the previous/next buttons
  if(articles.length === 10 || pageNumber > 0) {   // shows buttons if above page 0 OR
    nav.style.display = 'block'; //shows the nav display if 10 items are in the array
  } else {
    nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
  }
  
  // IF-ELSE iterates through each returned article, creating a headline-link to it
  if(articles.length === 0) {           // IF there is no data, inform the user
    console.log("No results");          // a placeholder for a more serious discussion
  } else {
    for(let i = 0; i < articles.length; i++) {    // use LESS THAN length because of the 0 index
      let article = document.createElement('article'); // create an 'article' variable that will
                                                       // create a node in the DOM (<article.)
      let heading = document.createElement('h2'); // as well as one for a <h2> tag
      let link = document.createElement('a');     // creates a link variable to add an <a> tag
      let img = document.createElement('img');  // creates a variable to add an <img> tag
      let para = document.createElement('p');   // creates a <p>  to append to the DOM
      let clearfix = document.createElement('div'); // creats a clearfix variable that will append
                                                    //     a <div> to the DOM

      let current = articles[i];        // created to hold the data of the current interated article
      console.log("Current:", current); // log the current article to the console


      link.href = current.web_url;  // attaches an href attribute and a link to the current article
      link.textContent = current.headline.main; //sets the <a>content</a>

      para.textContent = 'Keywords: ';    // adds 'Keywords' as content to the new <p> tags

      // FOR LOOP iterates through each article, specifically each article's keywords
      for(let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement('span');          // each time it creates a <span> tag 
        span.textContent += current.keywords[j].value + ' '; // adds the keyword as content to it
        para.appendChild(span);          // and then appends the <span> to the <p> node created above
      }

      // IF statement checks the current article (json) for data, checking if there is multimedia
      if(current.multimedia.length > 0) {
        // if there is an multimedia, creates a url for the image
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;  // creates an alt attribute for the image and adds
                                          //    the headline to it
      }

      //  targets the clearfix style in css
      clearfix.setAttribute('class','clearfix');

      article.appendChild(heading);   // this creates a child node at <h2>; creating a heading
                                      //     inside each article element
      heading.appendChild(link);      // places heading in link
      article.appendChild(img);       // appends the image to the article element
      article.appendChild(para);      // adds the keyword paragraph to the article
      article.appendChild(clearfix);  // adds the clearfix to the article
      section.appendChild(article);   // appends the article to the section already in the html
    }
   }
};                                //  END of displayResults function


//  *****   BUTTON FUNCTIONS   *****

function nextPage(e) {              // 'e' - the original object - is passed into the function
  pageNumber++;                     // increases the value of the pageNumber variable
  fetchResults(e);                  // rerun the fetch with a new pageNumber in the URL (line 49)
  console.log("Page number:", pageNumber);    // log the page number for review
};                                 //  END of nextPage function


function previousPage(e) {          // 'e' - the original object - is passed into the function
  if(pageNumber > 0) {              // if the button is pressed and the pageNumber is above 1st page,
    pageNumber--;                   //     it reduces the pageNumber by 1   (pageNumber - 1)
  } else {                          // if this is the first page (page 0),
    return;                         //     the button simple doesn't work
  }
  fetchResults(e);                  // rerun the fetch with a new pageNumber in the URL (line 49)
  console.log("Page number:", pageNumber);    // log the page number for review
};

