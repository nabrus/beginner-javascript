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
  // name of arg (in this case `event`) doesn't matter, the first arg will return the event object
  // console.log(event); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  // console.log(parseInt(event.target.dataset.price));
  // console.log(button.textContent);
  // const button = event.target;
  console.log('You clicked a button');
  console.log(event.target); // What was actually clicked
  console.log(event.currentTarget); // What fires the event
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

/*
event.target:
  event.target refers to the element that triggered the event. It represents the actual element on which the event occurred.

  For example, if you click on a nested element inside a parent element, event.target will point to the nested element—the one directly clicked.

  event.target always points to the element that originally dispatched the event, even if the event has propagated through multiple nested elements.

event.currentTarget:
  event.currentTarget refers to the element that the event listener is attached to. It represents the element that is currently handling the event.

  For example, if you have a click event listener attached to a parent element, and you click on a child element inside that parent, event.currentTarget will point to the parent element—the one that the event listener is attached to.
  
  event.currentTarget can change as the event propagates through the DOM hierarchy, especially in the context of event delegation or bubbling.
*/

// Loop over each button and attach a listener
buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

// Event on the window for bubbling/capturing example
window.addEventListener(
  'click',
  e => {
    console.log('You clicked the window');
    console.log(e.target);
    console.log(e.type);
    console.log(e.bubbles);
  },
  { capture: true } // This option triggers this event during capture phase
);

/*
Event Bubbling and Event Capturing Overview:
  Event propagation refers to the order in which events are handled when multiple elements are nested within each other.
  By default, events bubble up from the target element to its ancestors. This is called event bubbling.
  Event capturing is the opposite of event bubbling. Events are captured from the top-level ancestor down to the target element.
  You can use the addEventListener() method with the third parameter useCapture to specify whether to use event capturing (true) or event bubbling (false, default).
*/

/*
Propagation refers to the process by which an event travels through the DOM (Document Object Model) hierarchy from the target element to its ancestors or descendants. There are two main phases of event propagation: capturing and bubbling.

Capturing Phase:
  During the capturing phase, the event is first captured by the outermost ancestor of the target element and then progressively moves inward toward the target element.
  In this phase, the event starts from the top-level ancestor (usually the <html> element) and travels down the DOM hierarchy to the target element.
  Event listeners attached with the useCapture option set to true are triggered during the capturing phase.
  Target Phase:
  Once the event reaches the target element, it enters the target phase. This is where event listeners attached directly to the target element are triggered.
  At this stage, the event is said to be "at target".

Bubbling Phase:
  After the target phase, the event starts bubbling up through the DOM hierarchy, from the target element back to the top-level ancestor.
  During this phase, event listeners attached to ancestor elements are triggered. These event listeners are not executed until the event finishes its target phase.
  Event listeners attached with the useCapture option set to false (or omitted, as it's the default) are triggered during the bubbling phase.
*/
