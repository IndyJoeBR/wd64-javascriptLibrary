function filterNumbersFromArray(arr) {
  // Write the code that goes here
  arrayLength = arr.length

  for (testIndex of arr) {
    //testIndex = arr[i]
    console.log("This is the test index:",testIndex);
    console.log("This is the character typeof", typeof testIndex);
    testIndexType = typeof testIndex;

    if (testIndexType === "string") {
      console.log("Yep... string so delete it")
      arr.splice([testIndex],1);
    };
    console.log(arr);

    //return arr;
  }




}

var arr = [1, 'a', 'b', 2];
filterNumbersFromArray(arr);
for (var i = 0; i < arr.length; i++)
  console.log(arr[i]);
