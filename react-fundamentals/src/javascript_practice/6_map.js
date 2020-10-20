// Map method

const instructors = [
  { name: 'Quincy', specialty: 'Quantum Mechanics' },
  { name: 'Kenn', specialty: 'Norse Mythology' },
  { name: 'Paul', specialty: 'Tuvan throat singing' },
  { name: 'Aaron', specialty: 'Entomolgy' },
  { name: 'Carolyn', specialty: 'Kung Fu' }
]

// to loop through these we can use a loop

let instructor_names = [];

for (let i=0; i < instructors.length; i++) {
  instructor_names.push(instructors[i].name);
}

console.log(instructor_names);

//  Alternately we can map it

            //1             //2     //3    //4     //5   //6     //7
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

/*
1) make a new array (it will be one because that is what .map will return)
2) take the 'instructors' array
3) apply the .map method to it
4) is going to work with this placeholder variable (could be anything)
5) => basically means make/do/equal this (to the right)
6) the placeholder variable again
7) with the iterated 'name' from the array being mapped (instructors)
*/




let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];

console.log(kvArray);

let reformattedArray = kvArray.map(obj => {   // going to map the kvArray, the iterate is 'obj' will be used in the function
    let rObj = {};                            // initialize rObj as an object
    rObj[obj.key] = obj.value;      // rObj[x] with x being equal to the iterated-object.key (1, 2, and 3), so rObj[1], rObj[2], and rObj[3] = obj.value (10, 20, 30)
    console.log(rObj);
    return rObj;
  });