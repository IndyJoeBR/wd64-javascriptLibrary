      //7                       //1
module.exports = function (sequelize, DataTypes) {

                     //2   //3
  return sequelize.define('test', {  //4

        //5        //6
      testdata: DataTypes.STRING
  });
};



/*
1 - run an anonymous function w/ 2 parameters: sequelize and DataTypes; 
      it will return the value of what is created by sequelize.define
2 - use sequelize object to call .define() that will map model properties
      in the server file to a table in Postgres
3 - the first argument we pass in is the string 'test', which will become
      a table called 'tests' (the names get pluralized
4 - the second argument is an object... any key:value pairs in the object
      will become columsn of the table        
5 - 'testdata' is the key in the model object, a column in the db
6 - DataTypes.STRING is our value for the property; it is declaring that
      the contents of the column will be of the STRING datatype
7 - the model is exported to allow Sequelize to create the tests table
      with the testdata column the next time the server connects to the
      db and a user makes a POST request that uses the model        
*/