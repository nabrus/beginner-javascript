/* eslint-disable */

/* STRING */

const first = 'Wyatt';  // single quotes
const middle = "Jacob"; // double quotes
const last = `Urban`;   // backtick 

// Examples of using quotes in strings correctly
const sentence = 'She\'s so cool';   // escaping using a back slash
const sentenceA = "She's so cool";   // mixing double and single
const sentenceB = `She's so "cool"`; // mixing all three types

// Multi-line strings use escaping or backtick (template literals)

const animalChorus = `I'd rather be
I'd rather be with
I'd rather be with an animal`;

// Creating HTML for example:
const html = `
<div>
  <h2></h2>
</div>
`;

// Another example of using the backtick-template literals (template strings)
// for expression/variable interpolation
const age = 4;
const hello = `Hello my name is ${first}. Nice to meet you! In 10 more years I'll be ${10 + age}`;

// Combining both multi-line and interpolation example
const html1 = `
  <div>
    <h2>${first} ${last}</h2>
    <p>${hello}</p>
  </div>
`;

// document.body.innerHTML = html1;


/* NUMBER */

// Use the operator `typeof` to indicate the type of an operand.
const year = 2021;
const name = 'Tony Stark';

console.log(typeof(year)); // number 

// JS doesn't define different types of numbers, like integers, short, long, floating-point etc.
// JS numbers are stored as floating point numbers.
const integer = 100;
const float = 100.5;

// `Math` method example
const num = 22.65;
console.log(Math.round(num)); // 23

// Remainder (%)
const blueberries = 20;
const kids = 3;
const eachKidGets = Math.floor(blueberries / kids);
const dadGets = blueberries % kids;

// Floating point math
// Enter the following into the browser console:
// window.location = `https://${0.1 + 0.2}.com`;

// Note: use cents when storing money to avoid strange fraction issues

// Exponentiation (**): raising the first operand to the power of the second operand
console.log(10 ** 2);     // 100
console.log(1000 ** 200); // Infinity

// Note Typeof Infinity and -Infinity = number

// NAN (not a number)
console.log(10 / 'dog') // NaN
console.log(typeof(NaN)); // number


/* OBJECT */

const person = {
  first: 'Han', // property and value
  last: 'Solo',
  age: 45,
};

// Access properties for the values
console.log(person.first); // Han
console.log(person.age);   // 45


/* NULL and UNDEFINED */

// An indication a variable has not been assigned a value - `undefined` property
let dog;
console.log(dog); // undefined

// Expressing intentional absence for a value - null
const extraMoney = null; 

// Recap
let  somethingUndefined; // No value assigned
const somethingNull = null; // `null` has to be explicitly assigned, so it has a value of nothing


/* BOOLEAN */

// `true` or `false`
let isDrawing = false;

const currentAge = 18;
const ofAge = currentAge > 19;
console.log(ofAge); // false

// Equality 
// one equal (=) assigns a value 
let transport = "XWing";
transport = "Snow Speeder";

// double  equal (==) - Note: not best practice, use triple equal (===)
// Double `=` checks if the values are equal
console.log(10 == 10);  // true
console.log("10" == 10);  // true

// Triple `=` checks if the value and types are equal
console.log(10 === 10); // true
console.log("10" === 10); // false



/* SYMBOL */

/* `Symbol` is a data type in JavaScript used for creating unique and immutable values that can be used as property keys for object properties. They are often used to define private or hidden properties and provide a level of uniqueness and immutability in JavaScript programs.
*/

// Create using the `Symbol()` function
const newSymbol = Symbol();

// An optional description can be used for easier identifying or debugging
const newerSymbol = Symbol('description');

// Symbols with the same description are not equal
const symbol1 = Symbol('The description');
const symbol2 = Symbol('The description');

console.log(symbol1 === symbol2); // false


// Symbols can be use as property keys
const symbolKey = Symbol('key');

const obj = {
  [symbolKey]: 'value',
};

console.log(obj[symbolKey]); // Output: value


/*
Overall, symbols provide a way to create unique identifiers and avoid potential conflicts when defining object properties, making them useful for various purposes in JavaScript.
*/



