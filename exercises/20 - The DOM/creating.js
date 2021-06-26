// Creating HTML elements
/*
  `document.createElement()  method creates the HTML element specified by tagName
*/
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);
