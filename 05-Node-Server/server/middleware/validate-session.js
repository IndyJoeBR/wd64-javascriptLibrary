var jwt = require('jsonwebtoken');
var sequelize = require('../db');              // ****  no longer needed, previously require for import statement (#4)
//var User = require('../models/user');   
var User = sequelize.import('../models/user');                             //****************    The older way
//let User = require('../models/user')( sequelize, require('sequelize') );   //****************    The old way


module.exports = function(req, res, next) {
  if (req.method == 'OPTIONS') {
      next()
  } else {
    var sessionToken = req.headers.authorization;  //1
    console.log(sessionToken)                      //2
    if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided. '});
    else {      //4
      jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {    //5
        if(decoded){
          User.findOne({where: { id: decoded.id}}).then(user => {     //6
            req.user = user;      //7
            next();
          },
          function(){       //8
            res.status(401).send({error: 'Not authorized'});
        });
        } else {          //9
          res.status(400).send({error: 'Not authorized'});
        }
      });
    }
  }
};


/*
There's a lot here, so take it slow through this explanation. Additional information on the verify method can be found here (Links to an external site.).

1 - The variable sessionToken is created to hold the token, which is pulled from the authorization header of the request coming in.
2 - The token is printed to the console. This is purely for debugging purposes to verify that the token is being sent to the server. It should not be left in the final code, as it is a potential security vulnerability.
3 - If no token is present, the 403 Forbidden error is returned as the response. We have several different error handling responses in this file, so assigning each a different error code or message is a big help in debugging.
4 - No user property is ever provided in the request, so only tokens will get checked. This prevents unauthorized use of a token that was assigned to a different user.
5 - The verify method decodes the token with the provided secret, then sends a callback with two variables. If successful, decoded will contain the decoded payload; if not, decoded remains undefined. err is null by default.
6 - If decoded has a value, the Sequelize findOne method looks for an id in the users table that matches the decoded.id property. This value is then passed into a callback.
7 - The callback sets the user value for the request as the id value passed to it then sends the request on to its next destination. This property will be necessary later in adding to the database.
8 - If no matching id is found, an error message is thrown.
9 - If no value for decoded, an error message is thrown.
*/