/* eslint-disable */

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

document.body.innerHTML = html1;