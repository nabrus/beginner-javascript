const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  if (person.name === 'Wes') {
    console.warn('Incorrect name'); // warn
  }
});

// A good use example of console.groupCollapsed
// See `function doALotOfStuff()` below for basic `console.group` structure
people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`); // opens group in collapsed format
  console.log(person.country);
  console.log(person.cool);
  console.log('Done!');
  console.groupEnd(`${person.name}`); // exits group
});

console.table(people); // table output

// Console Methods
/*
  .log - general output logging info
  .info - informative logging ?? doesn't do much
  .error - changes output appearance of an error UI
  .warn - changes output appearance of a warning UI
  .table - logs output in a table
  .count - logs number of times a line has been called with the given label
  .group - creates an inline group of output by another level
  .groupCollapsed - inline group is collapsed requiring use of button to expand
  .groupEnd - exits the current inline group
*/

// Call stack or Stack Trace: a mechanism for an interpreter (ex JS interpreter in a web browser) to keep track of its place in a script that calls multiple functions -
// what function is currently being run and what functions are called within that function, etc.
/*
  Example of call stack when en error is thrown in the console:

  Uncaught ReferenceError: doesntExist is not defined
    at greet (debugging.js:65) // function that has an  error in the call stack
    at go (debugging.js:70) 
    at <anonymous>:1:1 // start of call stack

  greet	      @	debugging.js:65
  go	        @	debugging.js:70
  (anonymous)	@	VM694:1
*/

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  console.group('Doing some stuff'); // opens group
  console.log('Hey, first one of this group.');
  console.warn('Watch out, the bridge is out!');
  console.error('Not good');
  console.log('OK, last one of the group.');
  console.groupEnd('Doing some stuff'); // exits group, note pass in same string used to open group
}

function doctorize(name) {
  console.count(`Running Doctorize for ${name}`); // count how many times `doctorize` runs for given name
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
