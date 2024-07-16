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

console.log(smugglerName); // han - string
console.log(!smugglerName); // false - inverted boolean

// Coercion using `!!` - ensures a value is explicitly treated as a Boolean
console.log(!!smugglerName); // true - inverted boolean, inverted (resulting in the original boolean value)
/*
The `!!` operator in JavaScript is a common idiom used to convert any value to its
Boolean equivalent. It involves using the logical NOT operator `!` twice. The first `!` converts the value to a Boolean and inverts it, and the second `!` inverts it
again, resulting in the original Boolean representation of the value.
*/
