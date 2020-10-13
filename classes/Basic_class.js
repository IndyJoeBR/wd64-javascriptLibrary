class AddTwoNumbers {
  constructor (num01, num02) {
    this.num01 = num01;
    this.num02 = num02;
  }

  totalNumbers(num01, num02) {
    return num01 + num02;
  }

};

let myNum = new AddTwoNumbers();

console.log(myNum.totalNumbers(5,6));
