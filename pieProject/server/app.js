const Express = require('express');    // to hold the Express object
const app = Express();


app.listen(3000, () => {                    // args are the local host and callback function
  console.log('App is listening on localhost: 3000');
});

