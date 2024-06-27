// Intersection Observer API
/*
The Intersection Observer API is a web API that allows developers to asynchronously 
observe changes in the intersection of a target element with an ancestor element or 
the top-level document’s viewport. This API is useful for implementing 
functionality such as lazy loading of images, infinite scrolling, and triggering 
animations when elements come into view.
*/

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

/*
2nd example - Accept terms after reading them: making the accept button available only after the user has scrolled all the way down to bottom.
*/

const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallbackTwo(payload) {
  console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // Stop observing the button-preventing unnecessary process of observing happening in background
    ob.unobserve(terms.lastElementChild);
  }
}
const obTwo = new IntersectionObserver(obCallbackTwo, {
  root: terms,
  threshold: 1, // tells us when 100% on page
});

obTwo.observe(terms.lastElementChild);
