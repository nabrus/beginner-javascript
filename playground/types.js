/* eslint-disable */
// const name = 'Steve'; // single quotes
// const middle = "John"; // double quotes
// const last = `Urban`; // back-tics

// const hello = `Hello my name is ${name}. Nice to meet you. I am ${50 + 200} years old`;

// const html = `
//   <div>
//     <h2>${name}<h2>
//     <p>${hello}<p>
//   </div>
// `;

// console.log(html);


/* MATH */

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);

console.log(`Each kid gets ${eachKidGets} smarties`);

console.log(`And dad gets ${smarties % kids}`);

// When working with money always store values in cents
// due to Floating Point Math.

// Instead of price = 10.34;
const price = 1034;

// Infinity and -Infinity are a "number", expressing a number higher than the 
// comp can calculate.

// NaN (not a number) = "number"