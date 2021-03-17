// Function Definition, Function Declaration, or Function Statement
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// Anonymous Function - a function with no name
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function expressions - storing a function as a value in a variable
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
