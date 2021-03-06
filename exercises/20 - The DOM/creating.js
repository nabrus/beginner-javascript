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
