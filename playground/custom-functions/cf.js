/* FUNCTIONS */

// Basic  Structure
// Defining a Function or Function Definition
function calculateBill() {
  // Function body or block
}

// Call, Run, or Invoke a function
calculateBill();

// PARAMETERS and ARGUMENTS //

// Parameters are the placeholders in a function
// Arguments are the values passed in when calling a function

function calMyBill(billAmt, taxRate) {
  const total = billAmt * (1 + taxRate);
  return total;
}

const myTotal = calMyBill(200, 0.13);
console.log(calMyBill(100, 0.13), myTotal);
// 112.99999999999999 225.99999999999997

// Passing variables as args //
const theDudesTotal = 500;
const theDudesTax = 0.3;
const lebowskiTotal = calMyBill(theDudesTotal, theDudesTax);
console.log(lebowskiTotal); // 650

// Another example of defining a function
// then setting the invoked function with an argument in a variable
function sayHiTo(firstName) {
  return `Hi ${firstName}!`;
}

const greeting = sayHiTo('Luke');
console.log(greeting); // Hi Luke!

// Passing expressions or running expressions passed in
const myTotal2 = calMyBill(20 + 20 + 30 + 20, 0.15);
console.log(myTotal2); // 103.49999999999999
// Another example
const wyattsBill = 100;
const myTotal3 = calMyBill(wyattsBill + 50, 0.15);
console.log(myTotal3); // 172.5

// Passing functions as arguments //
function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}!!`;
}

console.log(yell(doctorize('strange'))); // HEY DR. STRANGE!!

// Default Parameters //
// They allow named parameters to be initialized with default values if no value or `undefined` is passed.
function droidName(name = 'R2 D2') {
  return `Your droids name is ${name}`;
}

console.log(droidName('BB 8')); // Your droids name is BB 8
console.log(droidName()); // Your droids name is R2 D2

// Putting it all together
function calMyBillTotal(billAmt, taxRate = 0.13, tipRate = 0.2) {
  const total = billAmt + billAmt * taxRate + billAmt * tipRate;
  return total;
}

console.log(calMyBillTotal(150)); // 199.5
console.log(calMyBillTotal(150, 0.2, 0.15)); // 202.5
// How to pass just two arguments, use `undefined` for the parameter that should use default value
console.log(calMyBillTotal(150, undefined, 0.3)); // 214.5
