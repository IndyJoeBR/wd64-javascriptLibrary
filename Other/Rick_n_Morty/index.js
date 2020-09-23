let url = 'https://rickandmortyapi.com/api/character/';

fetch(url)                                      // fetch data from URL
  .then(function(response) {                    // waits for results and passes them into 'response'
    return response.json();                     // JSONifies 'response'
  })
  .then(function(jsonData) {                    // passes results in new function
    let imageData = jsonData.results;           // declares variable for the response data from site
    displayImages(imageData);                   // calls new function and passes image data to it
  })                                            // END OF FETCH


  function displayImages (imageData) {          // New function to display images
    console.log(imageData);                     // logs all data from site
    let rickImageURL = imageData[0].image;      // declares variable for Rick's url
    let mortyImageURL = imageData[1].image;     // declares variable for Morty's url

    // Create <img> elements
    let rickTag = document.createElement("img");
    let mortyTag = document.createElement("img");

    // Add image URLs to tags
    rickTag.src = rickImageURL;
    mortyTag.src = mortyImageURL;

    // Add class to tags
    rickTag.className = "rickClass";
    mortyTag.className = "mortyClass";

    // Create the flex container
    let flexyContainer = document.createElement("div");
    flexyContainer.className = "flex-container";

    // Create DIVs for each image
    let ricksDiv = document.createElement("div");
    ricksDiv.appendChild(rickTag);

    let mortysDiv = document.createElement("div");
    mortysDiv.appendChild(mortyTag);

    // Add image DIVs to flex box
    flexyContainer.appendChild(ricksDiv);
    flexyContainer.appendChild(mortysDiv);

    // Add flexbox to page
    document.body.appendChild(flexyContainer);

  }                                             // END OF DISPLAY IMAGES