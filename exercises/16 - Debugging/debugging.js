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
  .groupEnd - exits the current inline group
*/

// Callstack

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
  doesntExist();
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
