// Cardio take two...
// Make a div
const newDiv = document.createElement('div');

// add a class of wrapper to it
newDiv.classList.add('wrapper');

// put it into the body
document.body.insertAdjacentElement('afterbegin', newDiv);

// make an unordered list
const newList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const newItems = `
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
`;
const fragItems = document.createRange().createContextualFragment(newItems);
newList.append(fragItems);
newDiv.append(newList);

// create an image
const newImg = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
newImg.src = '../../images/function-definition.jpg';
newImg.width = 250;
newImg.classList.add('functDef');
newImg.alt = 'Parts of functions diagram';
// Append that image to the wrapper
newDiv.append(newImg);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const someHTML = `
  <div>
    <p></p>
    <p></p>
  </div>
`;
newDiv.insertAdjacentHTML('afterbegin', someHTML);

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
