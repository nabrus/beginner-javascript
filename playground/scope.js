/* 
  SCOPE 

  Scope refers to where a variable can be accessed in a program.
  
  Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
*/

/* 
  GLOBAL SCOPE - refers to the context within which variables are accessible to every part of the program.

  A browsers global scope is the `Window`
  **NOTE: declaring variables with `let` or `const` does not attach them to the window unlike `var`. But global variables are not good practice!
*/
// Global variables are variables that exist within global scope.
const first = 'Steve';
