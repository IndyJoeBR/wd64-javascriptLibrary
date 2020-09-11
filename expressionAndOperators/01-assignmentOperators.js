//  ASSOGM<EMT OPERATOR
let r = 5;      //  =  is the assignment operator

//  ADDITION OPERATOR
r = r + 1;
r += 1;        //  These are all r=r+1
r++;           //      This is ONLY EVER r=r+1
console.log(r);

//    +=    also works with strings
let foo = "foo";
let bar = "bar";
console.log(foo);
console.log(bar);
foo += bar;
console.log(foo);


//  SUBTRACTION OPERATOR
r = r -1;
r -= 1;         //  These are all r=r-1
r--;
console.log(r);


//  MULTIPLICATION OPERATOR
r = r *2;
r *= 2;
console.log(r);

//  DIVISION OPERATOR
r = r / 2;
r /= 2; 
console.log(r);

//  EXPONENTIAL OPERATOR
r = r ** 2;
r **= 2;
console.log(r);


//  REMAINDER / MODULUS
r %= 10;
console.log(r);
r = r % 10;
console.log(r);