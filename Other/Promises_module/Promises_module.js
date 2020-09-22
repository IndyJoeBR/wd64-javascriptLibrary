// Boolean declaration 
var amIGood = true;


// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = { brand: 'HasMattelbro',   item: 'Turbo-Man action figure' };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

/*  Commented out for 2nd Promise
// Promise call 
var checkTwice = function () {       // a function expression
  iCanHasGift
      .then(function (fulfilled) {   // nice list = gift
          console.log(fulfilled);    // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
      })
      .catch(function (rejected) {      // naughty list = coal
          console.log(rejected);        // output: "You've made Santa's naughty list; enjoy your coal!"
      });
};


// 2nd promise
var playDate = function (gift) {
  return new Promise(
      function (resolve, reject) {
          var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

          resolve(message); 
      }
  );
};

// Promise call
var checkTwice = function () {
  console.log('before Christmas'); // log before
  iCanHasGift
      .then(playDate)                   // forces the code to wait until iCanHasGift is completed
      .then(function (fulfilled) {      // forces the code to wait until playDate is completed
          console.log(fulfilled);
      })
      .catch(function (error) {
          console.log(error)
      });
  console.log('after opening gifts'); // log after
}


checkTwice();
*/


// 2nd promise
var playDate = function (gift) {
  var message = "Salutations, fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

  return Promise.resolve(message);
};


// Promise call
var checkTwice = function () {
  iCanHasGift
  .then(playDate) // chain here
  .then(function (fulfilled) {
      console.log(fulfilled);
      // output: "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?"
  })
  .catch(function (error) {
      // all I got was a lump of coal :(
      console.log(error)
      // output: "You've made Santa's naughty list; enjoy your coal!"
  });
};

checkTwice();
