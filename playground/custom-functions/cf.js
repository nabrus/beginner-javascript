/* Functions */

// Basic Structure
// Defining a Function or Function Definition
function calculateBill() {
  // Function body or block
}

// Call, Run or Invoke a function
calculateBill();

// Parameters and Arguments

function calMyBill(billAmt, taxRate) {
  const total = billAmt * 1 + taxRate;
  return total;
}

const myTotal = calMyBill(200, 0.13);
console.log(calMyBill(100, 0.13), myTotal);
