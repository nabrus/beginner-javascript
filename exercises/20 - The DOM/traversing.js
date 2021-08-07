// Traversing the DOM-selection of elements by it's position
const steve = document.querySelector('.steve');
console.log(steve);

/* 
Elements are wrapped in tags, The DOM Node interface is an abstract base
class upon which many other DOM API objects are based, thus letting those
object types to be used similarly and often interchangeably.
*/

// Difference between an Element and Node:
// Elements
console.log(steve.children); // HTMLCollection {em, strong}
console.log(steve.firstElementChild); // <em>love</em>
console.log(steve.lastElementChild); // <strong>write code</strong>
console.log(steve.previousElementSibling); // <p class="example">I'm...
console.log(steve.nextElementSibling); // <img class="animatePic anotherClass" src...
console.log(steve.parentElement); // <body>...</body>

// Nodes
console.log(steve.childNodes); // NodeList(3) {text, em, text, strong, text}
console.log(steve.firstChild); // #text
console.log(steve.lastChild); // "!"
console.log(steve.previousSibling); // #text
console.log(steve.nextSibling); // #text
console.log(steve.parentNode); // <body>...</body>

// Removing nodes/elements from the DOM:

// Removes <p class="example">I'm the previous element sibling.</p>
const example = document.querySelector('.example');
example.remove();

// Another example-creating an element then removing. Will it still be available after removal?...
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
console.log(p); // <p>I will be removed</p>
// Removes from the DOM but still in memory
