// Traversing the DOM - selection of elements by it's position

const steve = document.querySelector('.steve');
console.log(steve);

/*
Reminder on the difference between an Element and a Node:
While all elements are nodes, not all nodes are elements. Nodes are the 
building blocks of the DOM, representing any object in the document tree, while 
elements specifically refer to nodes that represent HTML elements (anything 
wrapped in tags).
*/

// Examples of both Element and Nodes using properties to access them by position.
// Elements-just element nodes
console.log(steve.children); // HTMLCollection {em, strong}
console.log(steve.firstElementChild); // <em>love</em>
console.log(steve.lastElementChild); // <strong>write code</strong>
console.log(steve.previousElementSibling); // <p class="example">I'm...
console.log(steve.nextElementSibling); // <img class="animatePic anotherClass" src...
console.log(steve.parentElement); // <body>...</body>

// Nodes-includes text nodes
console.log(steve.childNodes); // NodeList(3) {text, em, text, strong, text}
console.log(steve.firstChild); // #text
console.log(steve.lastChild); // "!"
console.log(steve.previousSibling); // #text
console.log(steve.nextSibling); // #text
console.log(steve.parentNode); // <body>...</body>

// Chaining properties together to navigate the DOM (just as an example, not good practice)
const lukeImg = document.querySelector('[data-name="Luke"]');
// Moving up two elements (div, div), then up two sibling elements (img, p), finally moving over one element (em)
console.log(
  lukeImg.parentElement.parentElement.previousElementSibling
    .previousElementSibling.children[0]
); // <em>love</em>

// Removing nodes/elements from the DOM

// `The Element.remove()` method removes elements (or nodes) from the DOM.
// Removes <p class="example">I'm the previous element sibling.</p>
const example = document.querySelector('.example');
example.remove();

// Another example-creating an element then removing. Will it still be available after removal?...yes, it is saved in memory.
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
console.log(p); // <p>I will be removed</p>
// Removes from the DOM but still in js memory

/*
The removeChild() method of the Node interface removes a child node from the
DOM and returns the removed node.
*/
