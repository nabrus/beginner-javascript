// Intersection Observer API

// 1st example - when is the strong tag visible on page

const watch = document.querySelector('.watch');

function obCallback(payload) {
  console.log(payload);
}
const ob = new IntersectionObserver(obCallback);

ob.observe(watch);

// const terms = document.querySelector('.terms-and-conditions');
