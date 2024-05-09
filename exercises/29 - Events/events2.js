/*
Event Object:
  When an event occurs, an Event object is created and passed as an argument to the event handler function.
  The Event object contains information about the event, such as the type of event, target element, mouse coordinates, key codes, etc.
  You can access properties and methods of the Event object within the event handler to handle the event appropriately.
*/

const buyButtons = document.querySelectorAll('button.buy');

/*
When an event occurs and triggers an event handler function (also known as a callback function), JavaScript automatically passes an Event object as an argument to that function. This Event object contains information about the event that occurred, allowing you to access details such as the type of event, the element that triggered the event (known as the event target), mouse coordinates, key codes, and more.
*/

// Handler function
function handleBuyButtonClick(event) {
  // name of arg doesn't matter, the first arg will return the event object
  console.log(event);
}

// Loop over each button and attach a listener
buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

/*
Event Bubbling and Event Capturing:
  Event propagation refers to the order in which events are handled when multiple elements are nested within each other.
  By default, events bubble up from the target element to its ancestors. This is called event bubbling.
  Event capturing is the opposite of event bubbling. Events are captured from the top-level ancestor down to the target element.
  You can use the addEventListener() method with the third parameter useCapture to specify whether to use event capturing (true) or event bubbling (false, default).
*/
