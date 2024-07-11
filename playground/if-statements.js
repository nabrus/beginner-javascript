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
function slugify(sentence, lowercase) {
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

console.log(simpsonsChar === 'Homer'); // true
console.log(simpsonsChar === 'Bart'); // false
console.log(simpsonsChar !== 'Bart'); // true , note font changes ! = = to !==

// && (And), || (Or)
if (simpsonsChar === 'Homer' || simpsonsChar === 'Bart') { // Homer OR Bart equals simpsonsChar
  console.log('D\'oh!'); // D'oh!
}

if (simpsonsChar === 'Homer' && simpsonsChar === 'Bart') { // Homer AND Bart equals simpsonsChar
  console.log('D\'oh!'); // no output
}
