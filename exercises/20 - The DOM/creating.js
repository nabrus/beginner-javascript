// Creating HTML elements

/* A brief overview of creating then adding elements to the document
// Create a new <div> element
const newDiv = document.createElement('div');

// Set some attributes and content
newDiv.id = 'dynamicDiv';
newDiv.textContent = 'This is a dynamically created div.';

// Style the element
newDiv.style.backgroundColor = 'lightblue';
newDiv.style.padding = '10px';

// Append the new element to the document body
document.body.appendChild(newDiv);
*/

// Now a deeper dive...
/*
  `document.createElement()` method creates the HTML element specified by tagName (ex. `div`, `p`, `span`, `img`, etc)
*/

// Create a 'p' element
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

// Create an 'img' element
const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Awesome photo!';

// Create a 'div' element
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

/* 
The Node.appendChild() method adds a node to the end of the list of children of a specified parent node.
*/
// To avoid having to much re-painting, as would be with the order commented out below, change the order so it only re-paints once (technically twice, once to add div then again for the image)
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

myDiv.appendChild(myParagraph); // appending the paragraph to the div, stored in memory
myDiv.appendChild(myImage); //  appending the image to the div, stored in memory
// Now dump it into the DOM once - appending the completed div
document.body.appendChild(myDiv);

// Adding something on top (before the paragraph), like a heading;

const heading = document.createElement('h2');

heading.textContent = 'Shake and bake!';

myDiv.insertAdjacentElement('afterbegin', heading); // inserts before <p>

// Creating an unordered list and adding it to the DOM by using API's discussed for practice.
// My example first, then wes'. I inserted list at bottom
// Create elements ul and li
const list = document.createElement('ul');
const itemOne = document.createElement('li');
const itemTwo = document.createElement('li');
const itemFour = document.createElement('li');
const itemFive = document.createElement('li');

// Add text to li elements
itemOne.textContent = 'One';
itemTwo.textContent = 'Two';
itemFour.textContent = 'Four';
itemFive.textContent = 'Five';

// Add elements then attach to DOM
list.appendChild(itemOne);
list.appendChild(itemTwo);
list.appendChild(itemFour);
list.appendChild(itemFive);
document.body.appendChild(list);

// Create list item three and add to DOM
const itemThree = document.createElement('li');
itemThree.textContent = 'Three';

itemTwo.insertAdjacentElement('afterend', itemThree);

// Wes' example of ul - inserted at top
const wesList = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
wesList.appendChild(li);

document.body.insertAdjacentElement('afterbegin', wesList);

const li5 = document.createElement('li');
li5.textContent = 'Five';
wesList.append(li5);

// .cloneNode() method  returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not.
const li1 = li5.cloneNode(true); // `deep` (optional) parameter has the option of 'true'-the whole subtree including text in the child
li1.textContent = 'One';
wesList.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);

/*

Element: `append()` method

The Element.append() method inserts a set of Node objects or string objects 
after the last child of the Element.

The append() method can be called on any parent element and accepts one or more 
arguments, which can be Node objects, string objects, or a combination of 
both:
parentElement.append(node1, node2, ...);

*/
// Create and append a <div> element
const newDiv = document.createElement('div');
newDiv.classList.add('container');
document.body.append(newDiv);

// Create three <p> elements
const paraOne = document.createElement('p');
const paraTwo = document.createElement('p');
const paraThree = document.createElement('p');

// Add text and class's to the <p> elements
paraOne.textContent = 'May the force be with you.';
paraOne.classList.add('jedi');
paraTwo.textContent = 'Yes...yes, release your anger!';
paraTwo.classList.add('dark-side');
paraThree.textContent = 'A long time ago, in a galaxy far far away...';

// Append all three <p> elements to div
newDiv.append(paraOne, paraTwo, paraThree);
