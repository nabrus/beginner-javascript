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

// Breakpoint example
people.forEach((person, index) => {
  // debugger; // Pauses the JS from running when dev tools is open (a breakpoint).
  console.log(person.name);
});

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
    at greet (debugging.js:65) // function that has an error in the call stack
    at go (debugging.js:70) 
    at <anonymous>:1:1 // start of call stack, called the function in the browser console

  greet	      @	debugging.js:65
  go	        @	debugging.js:70
  (anonymous)	@	VM694:1
*/

// Web Console Helpers
/* 
  Grabbing Elements 
  `$(selector, element)`
  Equivalent to `document.querySelector()
  Looks up a CSS selector string `selector`, returning the first node descended from `element` that matches. If unspecified, `element` defaults to `document`.
  `$('p')` selects the first paragraph element

  `$$(selector, element)`
  Equivalent to document.querySelectorAll()`, but returns an array instead of a NodeList.
  `$$('p')` selects all paragraph elements

  `$0`
  The currently inspected element in the page.

  Remember these are only available in the console
*/

// Breakpoints
/*
  Adding a `debugger` statement inside your code
  debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

  Another way is to set breakpoints right inside the browsers dev tools Sources tab by clicking on the line.

  You can select breakpoints in the Event Listener Breakpoints menu, or DOM, etc.
*/

// Scope
// the context in which values and expressions (variables) are visible or can be referenced.

// Network Requests
// Using the Network tab in dev tools.

// Break On Attribute
// Highlight a line in the Elements tab, select Break on, then the next sub-menu item to

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

// Function for call stack example
function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

// Another function to add to the call stack
function bootstrap() {
  console.log('Starting the app!');
  go();
}

/*
  When called:
  bootstrap();

  output in console:
  Starting the app!
  Uncaught ReferenceError: doesntExist is not defined
    at greet (debugging.js:80)
    at go (debugging.js:85)
    at bootstrap (debugging.js:91)
    at debugging.js:94
*/

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
