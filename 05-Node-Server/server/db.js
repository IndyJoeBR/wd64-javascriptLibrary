const Sequelize = require('sequelize');  //1

        //2              //3       //4        //5          //6
const sequelize = new Sequelize('workoutlog', 'postgres', 'WTFisThis2020', {
//                                  db        user       db-password  
  host: 'localhost',   //7
  dialect: 'postgres'  //8
});

//  This should not be here because is may not finish before sequelize (it might not work) - it will be move elsewhere to a startup procedure
    //9       //10         //1
/*sequelize.authenticate().then(
  function() {  //12
    console.log('Connected to workoutlog postgres database');
  },
  function(err) {   //13
    console.log(err);
  }
);
*/
                    //14
module.exports = sequelize;

/*
Concept	Analysis
1	Import the Sequelize package.
2	Create an instance of Sequelize for use in the module with the sequelize variable.
3	Use the constructor to create a new Sequelize object.
4	Identify the db table to connect to.
5	The username for the db.
6	The password for the local db.
7	The host points to the local port for Sequelize. This is 5432.
8	Identify the QL dialect being used. Could be MSSQL, SQLLite, or others
9	Use the sequelize variable to access methods.
10	Call the authenticate() method.
11	authenticate() returns a promise. Use .then().
12	Fire a function that shows if we're connected.
13	Fire an error if there are any errors.
14	Export the module.

Further setup can be found at:
      https://sequelize.org/master/manual/getting-started.html#test-the-connection
*/