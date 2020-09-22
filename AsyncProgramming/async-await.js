// Async/Await

/*
    -  Allows us to program in a synchronous manner while still allowing
          cold ro un in the background
    -  Makes our site as responsive as possible (no waiting, not size-changing)

*/

// Async Function (syntax)

async function myFn() {
    // wait
}

const myAsyncFn = async () => {
    // wait
}

const newFN = () => {
    // wait (provides a syntax error because async is not declared)
}

async function fn() {
  return 'Hello';
}

fn().then(console.log);

fn().then(dataFromAsyncFun => {
  console.log(dataFromAsyncFun);
})


//  AWAIT
//  pauses at each away expression

fetch('https://random.do/woof.json')
  .then(res => res.json())          // each returns a 'promise' of its own
  .then(json => console.log(json))  //  this is also called 'method chaining'
  .catch(err => console.log(err));

  //  Method chaining - .then() together returns a promise (resolve/reject)

  /*     THIS IS JUST THE BREAKDOWN OF WHT ITS DOING - MUST BE WRAPPED IN ASYNC
  const response = await fetch('https://random.dog/woof/json');    // 
  const json = await response.json();               //  waits until completion before
  console.log(json);
  */

  const request = async () => {
    await fetch('https://random.dog/woof.json');
    const json = await request.json();
    return json;
  };

  request()
    .then(json => {
    console.log("The dog JSON:", json)
  });










