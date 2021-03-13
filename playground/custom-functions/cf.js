/* FUNCTIONS */

// Basic  Structure
// Defining a Function or Function Definition
function calculateBill() {
  // Function body or block
}

// Call, Run or Invoke a function
calculateBill();

// PARAMETERS and ARGUMENTS //

// Parameters are the placeholders in a function
// Arguments are the values passed in when calling a function

function calMyBill(billAmt, taxRate) {
  const total = billAmt * 1 + taxRate;
  return total;
}

const myTotal = calMyBill(200, 0.13);
console.log(calMyBill(100, 0.13), myTotal); // 100.13 200.13

// Passing variables as args //
const theDudesTotal = 500;
const theDudesTax = 0.3;
const lebowskiTotal = calMyBill(theDudesTotal, theDudesTax);
console.log(lebowskiTotal); // 500.3

// Another example of defining a function
// then setting the invoked function with an argument in a variable
function sayHiTo(firstName) {
  return `Hi ${firstName}!`;
}

const greeting = sayHiTo('Luke');
console.log(greeting); // Hi Luke!

// Passing expressions //
const myTotal2 = calMyBill(20 + 20 + 30 + 20, 0.15);
console.log(myTotal2); // 90.15
