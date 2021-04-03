/* 
  SCOPE 

  Scope refers to where a variable or expression (i.e. function) can be accessed in a program.
  
  Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
*/

/* 
  GLOBAL SCOPE - refers to the context within which variables/expressions are accessible to every part of the program.

  A browsers global scope is the `Window`
  **NOTE: declaring variables with `let` or `const` does not attach them to the window unlike `var`. But global variables are not good practice!
*/
// Global variables are variables that exist within global scope.
const first = 'Steve';

/* 

  Function Scope - variables that are only available inside the function in which they are declared.

*/

// Global variable
const age = 100;

function go() {
  const hair = 'blonde'; // Only available within this `go` function
  // `age` is available do to scope lookup-if var is not found within current scope, it will then go up a level higher to see if var is available there, etc.
  console.log(age); // 100
  /* 
    Be cautious of shadow variables. For example if the fallowing was defined inside this function:
    const age = 200;
    `age` would now be 200 when invoking go(), shadowing the global variable of `age`. 
  
  */
}

// Hair will not be available globally for example
console.log(hair); // Uncaught ReferenceError: hair is not defined
