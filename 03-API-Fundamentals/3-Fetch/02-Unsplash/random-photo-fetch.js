//  'randomImage' now references the <img> element in HTML line15
let randomImage = document.querySelector('.random-image'); 

console.log("randomImage:", randomImage);    // shows randomImage = <img>

fetch('https://source.unsplash.com/random') // goes to unsplash for rnd img
  .then(function(response) {                // (when) it comes back to 'response'
    if (!response.ok) {                     // if NOT-response.ok = true (so response.ok = false)
      console.log(response);                // log that 'response'
      return new Error(response);           // we create an Error object and pass it the 'response'
    }
    console.log("Response: ", response);    // we log the final version of the returned 'response'
    return response.blob();                 // use .blob() to convert 'response' data to an image
  })                                        // END of the first .then() 
  .then(function(photoBlob) {               // returned blob data is passed to a function as 'photoBlob'
    console.log("My Blob:", photoBlob);      // and we log the image to the console
                                            //   - note: it has two properties: size and type
    var objectURL = URL.createObjectURL(photoBlob);  // 'objectURL' now holds the URL for 'photoBlob'
    console.log("Object URL:", objectURL);  // we log the URL in the inspect console
    randomImage.src = objectURL;            // we now make the src attribute of randomImage (our <img> )
                                            //      equal to the objectURL (<img src="now the object URL")
    console.log("randomImage.src: ", randomImage.src);   // log the src for the <img> tag
  })                                        // END of the second .then()
  .catch(function(err) {
      console.log(err);
  });
