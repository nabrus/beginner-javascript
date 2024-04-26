/* 
**WARNING: Adding in HTML as strings is a security risk. You 
need to scrub for threats. See later examples in security vids.
This is just an intro and doesn't include security steps.**
*/
const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Random Pics`;

// Note-the following is just a string not an element
const myHTML = `
<div class="wrapper">
  <h2>Cool ${desc}</h2> 
  <img src="${src}" alt="${desc}" />
</div>
`;

// This string can be dumped into to an element with innerHTML
item.innerHTML = myHTML;

// or if you need to access each node of the HTML

/*

In JavaScript, the Range interface represents a range of 
elements in the DOM (Document Object Model). It provides a way 
to select a portion of a document, such as a portion of text or 
a range of nodes, and manipulate it programmatically. The Range 
interface is commonly used in tasks such as text selection, 
highlighting, and editing.

Use the Document.createRange() method to create a range


The createContextualFragment() method is a JavaScript method 
available on the Range object. It allows you to create a new 
DocumentFragment from a string of HTML or XML markup. This 
method is particularly useful when you want to dynamically 
generate DOM elements from a string of HTML and insert them 
into the document.

*/

// Turn a string into a DOM element/node
const myFragment = document.createRange().createContextualFragment(myHTML);

// Now the HTML is elements and can be selected
// console.log(myFragment.querySelector('img'));
console.log(myFragment);

// Then attach to the DOM
// document.body.appendChild(myFragment);
