/* ***********************************************

  SCOPE 

  Scope refers to where a variable or expression (i.e. function) can be accessed in a program.
  
  Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.

*********************************************** */

/* ***********************************************

  GLOBAL SCOPE - refers to the context within which variables/expressions are accessible to every part of the program.

  A browsers global scope is the `Window`
  **NOTE: declaring variables with `let` or `const` does not attach them to the window unlike `var`. So `window.first` would show `undefined`.
  
  Functions declared in global scope will also be attached 
  to the window. `window.sayHi()` will work when that function is in global.
  
  **BUT global variables are not good practice!**

*********************************************** */
// Global variables are variables that exist within global scope.
const first = 'Steve';

/* ***********************************************

  FUNCTION SCOPE - variables that are only available inside the function in which they are declared.

*********************************************** */
// Global variable
const age = 100;

function go() {
  const hair = 'blonde'; // Only available within this `go` function
  // `age` is available do to scope lookup-if the variable is not found within current scope, it will then go up a level higher to see if the variable is available there, etc.
  console.log(age); // 100
  /* 
    Be cautious of shadow variables. For example if the fallowing was defined inside this function:
    const age = 200;
    `age` would now be 200 when invoking go(), shadowing the global variable of `age`. 
  */
}

// Hair will not be available globally for example
// console.log(hair); // Uncaught ReferenceError: hair is not defined

/* ***********************************************

  BLOCK SCOPE - variables, when declared with `let` or `const` that are only available within the corresponding block. A block refers to the curly brackets `{}` within `if`, `switch` conditions or `for` and `while` loops for example but not the `{}` of a function. Again, that would be function scope. 

  function spaceCraft() {
    if (true) {
      var imperialShip = 'Tie Fighter';          // exists in function scope
      const rebelShip = 'X-Wing';                // exists in block scope
      let lightFreighter = 'Millennium Falcon';  // exists in block scope
    }
  }

*********************************************** */
function isCool(name) {
  let cool; // exists in function scope
  if (name === 'Steve') {
    cool = true;
  }
  return cool;
}
/* eslint-disable */
// Using `var` for this loop will alow the `i` variable to leak out to global scope. So after this loop runs, `i` = 10 outside that scope.  Using `let` here to declare `i` would make it block scoped.
for(var i = 0; i < 10; i++) {
  console.log(i);
}

/* LEXICAL SCOPE */
// Lexical scope is a fundamental concept in JavaScript that determines how 
// variables are accessed and referenced in a program.

// Scope lookup for variables are where functions are defined not where they are run (invoked).

// Lexical scope in JavaScript allows functions to access 
// variables from their parent functions, creating a 
// hierarchical structure of variable accessibility.

const dog = 'Sandy';

function logDog() {
  console.log(dog); // `Sandy` will get passed in
}

function goDog() {
  const dog = 'Snoopy';
  logDog();
}

goDog();

/* Function Scope */
function sayHi(name) {
  function yell() { // `yell` function scoped to parent function `sayHi`
    console.log(name.toUpperCase())
  }
  yell();
}

yell() // Uncaught ReferenceError: yell is not defined

// NOTE - generally functions inside one another are  rarely used. With the exception of closures.
