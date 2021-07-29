// Creating HTML elements
/*
  `document.createElement()  method creates the HTML element specified by tagName
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
// To avoid having to much re-paining, as would be with the order below,  change the order so it only re-paints once (twice for the image)
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
// Now dump it into the DOM once
document.body.appendChild(myDiv);

// Adding something on top, like a heading;

const heading = document.createElement('h2');

heading.textContent = 'Shake and bake!';

myDiv.insertAdjacentElement('afterbegin', heading);

// Creating an unordered list and adding it to the DOM

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

// Wes' example of ul
const wesList = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
wesList.appendChild(li);

document.body.insertAdjacentElement('afterbegin', wesList);

const li5 = document.createElement('li');
li5.textContent = 'Five';
wesList.append(li5);

const li1 = li5.cloneNode(); // has the option of 'true' for deep-the whole subtree including text in the child
li1.textContent = 'One';
wesList.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);
