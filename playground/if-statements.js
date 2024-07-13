/*
`if` statements in JavaScript are a fundamental control structure that allows
you to execute code conditionally based on whether a specified condition
evaluates to true or false.
*/

/*

Syntax

`if (condition) {
  // code to execute if the condition is true
}`

*  `condition`: An expression that evaluates to `true` or `false`. 
*  Code Block: The code within the curly braces `{}` runs if the condition is `true`.

*/

/* eslint-disable */

const age = 50;

// `if` statement with `else if` and `else`
if (age > 70 ) {
  console.log('You are in your seventies');
} else if (age > 60) {
  console.log('You are in your sixties');
} else if (age > 50) {
  console.log('You are in your fifties');
} else {
  console.log('You are a young blood');
}

// `if` statement in a function
function slugify(sentence, lowercase) { // `lowercase` takes a boolean (true, false)
  const slug = sentence.replace(/\s/g, '-');
  if (lowercase) {
    return slug.toLowerCase();
  }
  // else
  return slug;
}

console.log(slugify('Why You LITTLE...', true));
console.log(slugify('Why YOU little...'));


// `==` vs `===` refresher and the bang `!` (not)
console.log(undefined == null) // true
console.log(undefined === null) // false

const simpsonsChar = 'Homer';
const simpsonsChar2 = 'Bart';

console.log(simpsonsChar === 'Homer'); // true
console.log(simpsonsChar === 'Bart'); // false
console.log(simpsonsChar !== 'Bart'); // true , note font changes ! = = to !==

// && (And) - || (Or)
if (simpsonsChar === 'Homer' || simpsonsChar === 'Bart') { // Homer OR Bart equals simpsonsChar
  console.log('D\'oh!'); // D'oh!
}

if (simpsonsChar === 'Homer' && simpsonsChar === 'Bart') { // Homer AND Bart equals simpsonsChar
  console.log('D\'oh!'); // no output
}

// `includes` method on strings performs a case-sensitive search returning true or false
if ('Bartholomew'.includes(simpsonsChar2)) {
  console.log('Eat my shorts!')
}

// or for readability use a variable...for example
const fullName = ('Bartholomew'.includes(simpsonsChar2));

if (fullName) {
  console.log('Don\'t have a cow man!')
}

// Truthy and Falsy
/*
The concept of "truthy" and "falsy" refers to how values are evaluated in Boolean contexts, such as in conditional statements (if, while, etc.).
*/

// Truthy/Falsy examples

// const ship = ''; // Empty string = falsy
const ship = "The Millennium Falcon";

if (ship) {
  console.log('You have a ship!');
} else {
  console.log('You don\'t have a ship');
}

// const score = 0; // zero = falsy
const score = "0"; // 1, -10, or a string of zero = truthy

if (score){
  console.log('They scored!!');
} else {
  console.log('No score yet.');
}

// let game; // undefined = falsy
// const game = null; // null = falsy
const game = "hello" - 10; // NaN = falsy

if (game) {
  console.log('That\'s my favorite game!!');
} else {
  console.log('I\'ve never heard of that one!?');
}

// const empty = {}; // empty object = truthy
const empty = []; // empty array = truthy

if (empty) {
  console.log('Yep, it\'s truthy!');
} else {
  console.log('It\'s falsy!');
}

Object.keys({})

/*
Summary of each:
Falsy Values: Evaluate to false in Boolean contexts. Include false, 0, -0, 0n, "", null, undefined, and NaN.

Truthy Values: Evaluate to true in Boolean contexts. Include all values not listed as falsy, such as non-zero numbers, non-empty strings, objects, arrays, and functions.
*/