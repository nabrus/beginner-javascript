/*
`addEventListener()` is a method in JavaScript that allows you to attach an
event listener to an HTML element. This event listener listens for a specific
event (such as a mouse click, a keypress, or a form submission) and executes a
JavaScript function (or runs some JavaScript code) when that event occurs.

syntax:
element.addEventListener(event, function, options);

  * element: The DOM element to which you want to attach the event listener.

  * event: A string representing the name of the event you want to listen for (e.g., 'click', 'mouseover', 'keydown', etc.).

  * function: The JavaScript function that will be executed when the specified event occurs. This function is often referred to as the "event handler" or "event callback".

  * options (optional): An optional object that specifies additional options for the event listener, such as once, capture, or passive.

Note: the function passed in can be referred to as a "callback function".
A callback function is a function that is passed as an argument to another
function and is executed later, usually in response to an event or when a
certain condition is met.

In the context of `addEventListener()`, the callback function represents the
code that you want to execute when the specified event occurs. When the event
occurs, the browser will call the callback function, allowing you to respond to
the event appropriately.

*/

const butts = document.querySelector('.butts');
// Passing in an anonymous function
// butts.addEventListener('click', () => alert('Downloading Virus'));

// or passing in a named function
function handleClick() {
  alert('!!Downloading Virus!! pwnd');
}

butts.addEventListener('click', handleClick);
