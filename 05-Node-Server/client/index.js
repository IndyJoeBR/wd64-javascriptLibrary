function fetchHelloDataFromAPI() {
  fetch('http://localhost:3000/test/helloclient', {  //1
    method: 'GET',
    headers: new Headers ({   //2
      'Content-Type': 'application/json'
    })
  })
    .then(function (response) {
        console.log("Fetch response:", response)
        return response.text();  //3
    })
    .then(function (text) {
        console.log(text);
    });
};

/*
1 - Test endpoint with fixed value to verify server works.
2 - Send our headers to the server with the Headers() constructor object. We'll talk more about this in a later module.
3 - The value received is a string, not a JSON object, so .text() is used instead of .json()
*/

//***************************
//  2 POST long hand:  /one
//***************************
function postToOne() {
  var url = 'http://localhost:3000/test/one';

  fetch(url, {
    method: 'POST',                       //1
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(
    function(response){                   //2
      return response.text()
    })
    .catch(
      function(error){                    //3
        console.error('Error:', error)
      })
    .then(
      function(response){                 //4
        console.log('Success:', response);
      })
};

/*
1 - We are fetching the url. The route in the server handles a POST request, so our method type is POST. Remember that these two must match. If a route takes a POST request, then the declared method in the request should POST.
2 - We pass the response into a Promise that returns the response as plain text. (We'll use more JSON later)
3 - We handle an error, if an error comes back.
4 - In the final then(), we simply print the plain text response to the console
*/


//***************************
//  3 POST /one : Arrow Function
//***************************
function postToOneArrow(){
  var url = 'http://localhost:3000/test/one';

  fetch(url, {    //1
    method: 'POST',
    headers: new Headers({
      'Content-Type' : 'application/json'
    })
  }).then(res => res.text())    //2
    .catch(error => console.error('Error:', error))   //3
    .then(response => console.log('Success:', response));   //4
}

/*
1 - We're reaching out to an endpoint with a POST request. We add the appropriate headers.
2 - We are asking for a plain text response.
3 - We handle an error, if there is one.
4 - In the end, we simply print the data to the console.
*/


//***************************
//  Post Data Method (formerly known as 'postData() - renamed because it was being stupid)
//***************************
function posting() {
  let content = { testdata: { item: 'This was save!' } };   //1

  let testDataAfterFetch = document.getElementById('test-data');    //2
  let createdAtAfterFetch = document.getElementById('created-at');

  fetch('http://localhost:3000/test/seven', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)   //3
  })
  .then(response => response.json())
  .then(function (text) {
    console.log(text);
    testDataAfterFetch.innerHTML = text.testdata.testdata;    //4
    createdAtAfterFetch.innerHTML = text.testdata.createdAt;
  });
}

/*
1 - We set up an object, just like we would have in Postman. We have a preset string as the value of the item property.
2 - We target some specific ids in the DOM. These elements will hold the value of the response that comes back after the post is stored. Here's a screenshot to show you what we're pointing to in the DOM.
3 - We pass in our pre-defined object into the fetch call within the body property. Notice that the method property is now POST instead of GET.
4 - Our response comes back and is printed to the console, and it is also displayed to the user along with the timestamp. We access the separate values by calling text.testdata. In the DOM, the innerHTML property allows us to take the plain text that we get back and display it in the targeted element.
*/


//***************************
//  4 GET FROM /ONE - Display Data  (from Fetch from One module)
//***************************
function fetchOneDisplayData(){

  let url = "http://localhost:3000/test/one";      //1
  let dataView = document.getElementById('display-one');    // this does not exist; dataView not used, no id display-one or data-one

  console.log("Step: Initial LETs complete")

  fetch(url, {            //2    This call the GET /one test controller which gets the table data and returns it JSONified
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(
      function(response){
        //console.log(response.json);    // ***************  DELETE  *************
        return response.json()
        //console.log("Step: Through first .then(response)")  // ***************  DELETE  *************
      })
    .catch(
      function(error){
        console.log("Step: In .catch")  // ***************  DELETE  *************
        console.error('Error:', error)
      })
    .then(
      function(results){
        console.log("Step: In function(results):", results)  // ***************  DELETE  *************
        let myList = document.querySelector('#getjson');        //3

        for (r of results){         //4
          console.log("Step: Going through for-loop")  // ***************  DELETE  *************
          console.log('Response:', r.testdata);       //5
          var listItem = document.createElement('li');      //6
          listItem.innerHTML = r.testdata;       //7
          myList.appendChild(listItem);       //8
        }
      })
};      

/*
1 - We set up our URL in one variable and target the data-one id in the DOM in another one.
2 - We create a fetch() with Headersand therequest method of GET. There are also chained promises that handle the data when it returns or handle an error if one comes back.
3 - Inside the final .then(), we are going to work towards showing the returned data in the DOM. We start by targeting the getjson id in the DOM and attaching the value to the myList variable.
4 - We set up a for of loop.
5 - We write a console.log() statement to show how we can access the values that come back in the object inside the response.
6 - We create another variable called listItem. The createElement() method will create that type of element in the DOM. In this case, we create a list item, li, every time we iterate.
7 - Each time we iterate, we store the value of r.testdata in the newly create li.
8 - We call appendChild on myList, which means that each time we iterate we put the li into the unordered list.

Just to succinctly summarize the last then():
   - We target a list, 'myList'.
   - We iterate over the response object with a for-of loop.
   - Each time we iterate, we create a list item.
   - The value gets stored in the innerHTML of the li.
   - We append the list item to an unordered list.
   - We continue until we get to the end of the results(response) object.
*/



