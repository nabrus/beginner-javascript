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

// NAN (not a number)
console.log(typeof(NaN)); // number


/* OBJECT */

const person = {
  first: 'Han',
  last: 'Solo',
  age: 45,
};

// Access properties for the values
console.log(person.first);
console.log(person.age);