// Function Definition, Function Declaration, or Function Statement
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// Function expressions - storing a function as a value in a variable
// This also is an anonymous function - a function with no name
const doctorize2 = function(firstName) {
  return `Dr. ${firstName}`;
};

// Arrow Functions //
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
// Method - a function which is a property of an object. Or simply, functions that live inside objects.

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