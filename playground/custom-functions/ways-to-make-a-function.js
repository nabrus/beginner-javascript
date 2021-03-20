// FUNCTION DECLARATION  (Function Statement, or Function Definition) //
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// FUNCTION EXPRESSIONS - storing a function as a value in a variable //
// This also is an anonymous function - a function with no name
const doctorize2 = function(firstName) {
  return `Dr. ${firstName}`;
};

// ARROW FUNCTION //
// Function declaration
function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
  // Can also condense to `return inches * 2.54`
}

console.log(inchToCM(3));

// Converted to an arrow function
const inchToCMArrow = inches => inches * 2.54;

console.log(inchToCMArrow(6));

// Another example
function add(a, b = 3) {
  return a + b;
}

console.log(add(4)); // 7

// Converted to an arrow function
const addArrow = (a, b = 3) => a + b;

console.log(addArrow(7)); // 10

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log('Running the Anon function'); // Running the Anon function
  return 'The Dude abides';
})();

/* eslint-disable */
// METHOD - a function which is a property of an object. Or simply, functions that live inside objects. //

const threepio = {
  name: 'C3PO',
  // Method
  sayHi: function() {
    console.log('Hello I am C3PO, human cyborg relations');
    return 'Hello I am C3PO, human cyborg relations';
  },
  // Short hand method-better syntax, same result. **preferred way**
  complain() {
    console.log('BUT SIIIIRR!!');
    return 'BUT SIIIIRR!!';
  },
  // Arrow function used for method
  scold: () => {
    console.log('Oh switch off!');
    return 'Oh switch off!';
  }
};

threepio.sayHi(); // is a method
threepio.complain(); // is a method

// CALLBACK FUNCTION - a function passed into another function as an argument, which is then invoked inside the outer function to complete some action. //
// Click callback example
const buttonA = document.querySelector('.clickMe');
const buttonB = document.querySelector('.dontClick');
const buttonC = document.querySelector('.comeOnNow');

function handleClick() {
  console.log('Stop clicking ME!!!!');
}

// Passing in callback functions when the function was declared outside
buttonB.addEventListener('click', handleClick); // handleClick is the callback function
buttonA.addEventListener('click', threepio.sayHi); // threepio.sayHi is the callback

// Passing an anonymous function inside directly (arrow function syntax)
buttonC.addEventListener('click', () => console.log('Enough with the clicking!'));

// Another example would be a timer callback using `setTimeout`
setTimeout(threepio.scold, 1000); // after a second `threepio.scold` will run
// or pass in an anonymous function
setTimeout(function() {
  console.log('Beep Beep Bloop Beep');
}, 2000); // after 2 seconds the anonymous function will run
