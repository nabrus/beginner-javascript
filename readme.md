![](https://res.cloudinary.com/wesbos/image/upload/v1574876851/BJS/BJS-Social-Share.png)

# Beginner JavaScript!

[Beginner JavaScript](https://BeginnerJavaScript.com) A course by Wes Bos

## Index

### [Variables](https://github.com/nabrus/beginner-javascript/blob/master/playground/variables.html)
*  `var`, `let`, and `const`

### [JS Data Types](https://github.com/nabrus/beginner-javascript/blob/master/playground/types.js)
*  String
*  Number
*  Object
*  `null` and `undefined`
*  Boolean
    * Equality: difference between `=` vs. `==` vs. `===`
*  Symbol 

### Functions

*  [Built In](https://github.com/nabrus/beginner-javascript/blob/master/playground/functions.html)
*  [Custom](https://github.com/nabrus/beginner-javascript/blob/master/playground/custom-functions/cf.js)
     *  Basic function structure
     *  Parameters and Arguments
     *  Default Parameters

### Function Definition Diagram

![Function Definition Diagram](images/function-definition.jpg)

*  [Declaring Functions](https://github.com/nabrus/beginner-javascript/blob/master/playground/custom-functions/ways-to-make-a-function.js)
     *  Function Declaration (Function Statement, Function Definition)
     *  Function Expression
        *  Anonymous Function
     *  Arrow Function
     *  IIFE (Immediately Invoked Function Expression)
     *  Method
     *  Callback Function

### [Debugging](https://github.com/nabrus/beginner-javascript/blob/master/exercises/16%20-%20Debugging/debugging.js)

*  Console Methods
*  Call Stack
*  Web Console Helpers - check out [MDN](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Helpers) for more info.
*  Breakpoints
     *  Debugger Statement
     *  Setting breakpoints using browsers dev tools
*  Network Requests

### [Scope](https://github.com/nabrus/beginner-javascript/blob/master/playground/scope.js)

*  Global Scope
     *  Global Variable
*  Function Scope
*  Block Scope
*  Lexical Scope

### [Hoisting](https://github.com/nabrus/beginner-javascript/blob/master/playground/hoisting.js)

*  Hoisting of function and variable declarations

### [Closures](https://github.com/nabrus/beginner-javascript/blob/master/playground/closures.html)

*  High level overview of a *closure*

### The Dom

*  [Intro to the document](https://github.com/nabrus/beginner-javascript/blob/master/exercises/20%20-%20The%20DOM/the-dom.js)
     *  Selecting Elements - `document.querySelector()` & `document.querySelectorAll()`
     *  Nodes vs. Elements
     *  `console.dir()`
     *  Getters & Setters - using properties to 'get' or 'set'
          *  `.textContent` vs. `.innerText`
          *  `.innerHTML` & `.outerHTML`
     *  Attributes - updating, adding, getters/setters
          * `.alt`, `.naturalWidth`, `.width`
     *  HTML Data Attributes
          *  Prefix `data-*` to an attribute name
          *  Accessing the data stored in `data-*` attributes using the `dataset` property
     *  Methods
          *  `insertAdjacentText()`
          *  `setAttribute()`
          *  `getAttribute()`
     *  Interacting with classes of an HTML element using `element.classList`
          *  `element.classList.add("newClass");`
          *  `element.classList.remove("class");`
          *  `element.classList.toggle("class");`
*  [Creating HTML](https://github.com/nabrus/beginner-javascript/blob/master/exercises/20%20-%20The%20DOM/creating.js)
     *  `document.createElement()` - creates HTML elements specified by tagName
     *  Adding the newly created elements to the document
          *  `Node.appendChild()` method
          *  `Element.append()` method
          *  `Element.insertAdjacentElement()` method
*  [Creating HTML from strings](https://github.com/nabrus/beginner-javascript/blob/master/exercises/20%20-%20The%20DOM/creating-with-strings.js)
     *  `Document.createRange()` method to create a *range*
     *  `createContextualFragment()` method available on the Range object
*  [Traversing and Removing Nodes](https://github.com/nabrus/beginner-javascript/blob/master/exercises/20%20-%20The%20DOM/traversing.js)
     *  Using Node and Element properties to traverse the DOM:
          *  `Element.children`
          *  `Element.firstElementChild`
          *  `Node.childNodes`
          *  `Node.firstChild`
