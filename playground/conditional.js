// Review on logical NOT operator (bang)
const isCool = false;

// variable inverted when using `!`
if (!isCool) {
  console.log('You are not cool!!');
}

/*
When you use the `!` operator on a value:
  * The value is first converted to a Boolean.
  * The Boolean value is then inverted.
*/

const smugglerName = 'han';
const pilotName = 'luke';
const bountyHunter = '';

console.log(smugglerName); // han - string
console.log(!smugglerName); // false - inverted boolean

// Coercion using `!!` - ensures a value is explicitly treated as a Boolean
console.log(!!smugglerName); // true - inverted boolean, inverted (resulting in the original boolean value)
/*
The `!!` operator in JavaScript is a common idiom used to convert any value to its
Boolean equivalent. It involves using the logical NOT operator `!` twice. The first `!` converts the value to a Boolean and inverts it, and the second `!` inverts it
again, resulting in the original Boolean representation of the value.
*/

// Checking for Existence: Often used to check if a variable or object property exists or is not null/undefined or any falsy value.
console.log(!!pilotName); // true
console.log(!!bountyHunter); // false

// TERNARY

/*
A ternary operator in JavaScript is a concise way to perform conditional
operations. It is the only operator in JavaScript that takes three operands, hence
the name "ternary". It is also known as the conditional operator.
*/

// Syntax: condition ? expressionIfTrue : expressionIfFalse

const count = 100;
// convert the following into a ternary
// let word;

// if (count === 1) {
//   word = 'item';
// } else {
//   word = 'items';
// }

const word = count === 1 ? 'item' : 'items';

const sentence = `You have ${count} ${word} in your cart.`;
console.log(sentence);

// Ternary used write in the variable
const sentence2 = `You have ${count} item${
  count === 1 ? '' : 's'
} in your cart`;

console.log(sentence2);

// Using ternary to run a function
function showAdminBar() {
  console.log('Displaying Admin Bar');
}

const isAdmin = true;
isAdmin ? showAdminBar() : null;

// AND AND Trick
function check1() {
  console.log('Running check 1');
  return true;
}
function check2() {
  console.log('Running check 2');
  return false;
}
function check3() {
  console.log('Running check 3');
  return true;
}

// "short circuiting" in JS
if (check1() && check2() && check3()) {
  console.log('All checks pass!');
} else {
  console.log('Some checks failed!');
}

// Used on example on the isAdmin from above `isAdmin ? showAdminBar() : null;`
// Checking if isAdmin is `true`. If true function runs if not nothing happens
isAdmin && showAdminBar();
