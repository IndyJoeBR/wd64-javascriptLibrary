const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], "Nan" ];
let [          string,  num,  ,          obj,             ,              nan]   = array;

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length-1];

console.log(stringVar, numVar, objVar, nanVar);

console.log(string, num, obj, nan);


let newArr = ['a', 1, undefined, ...array];
console.log(newArr);

const testObj = {
  testString: 'stringy thingy',
  testNum: 23,
  testBool: true,
  testObject: {key: 'waluigi'},
  testNan: "Nan"
};

// The regular way
const objString = testObj.testString;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan = testObj.testNan;

console.log("the regular way")
console.log(objString, objNum, objObj, objNan);

console.log('the destructuring way');
let {testString, testNum, testObject, testNan} = testObj;
console.log(testString, testNum, testObject, testNan);

console.log('the spread way');
let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj);
