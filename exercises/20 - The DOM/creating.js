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
