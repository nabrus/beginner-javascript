/* eslint-disable */

// Hoisting-when variable and function declarations are put into memory during the compile phase, enabling to invoke before declared. Virtually moving (hoisting) declarations to the top of your code. 

// Function declarations
sayHi(); // calling sayHI() before its declaration works due to hoisting

function sayHi() {
  console.log('hey!'); // hey!
  console.log(add(10, 2)); // 12
}

// another example - still works even though it's called  in `sayHi` prior to declaration
function add(a, b) {
  return a + b;
}

// Variable declarations
console.log(age); // undefined because only declarations are hoisted, no initialization (assigning the value) has happened at this stage

var age = 10;
