// Intersection Observer API

/*
1st example - when is the strong tag visible on page
*/
const watch = document.querySelector('.watch');

function obCallback(payload) {
  console.log(payload[0].isIntersecting); // will give a boolean (true/false)
  console.log(payload[0].intersectionRatio); // shows how much of target is visible on page
}
const ob = new IntersectionObserver(obCallback);

// `observer.observe(target)` method is part of the Intersection Observer API, which is used to start observing a specified target

// ob.observe(watch);

/*
When you call `observer.observe(target)`, you are instructing the 
IntersectionObserver instance to begin watching the target element. The observer 
will then execute its callback function whenever the target element intersects with 
the root container at specified threshold levels.
*/

// const terms = document.querySelector('.terms-and-conditions');
