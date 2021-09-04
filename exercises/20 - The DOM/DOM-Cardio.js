// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them
const myItems = `
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
`;

myList.innerHTML = myItems;

// put that list into the above wrapper
myDiv.append(myList);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://picsum.photos/200';

// set the width to 250
myImage.width = 250;

// add a class of cute
myImage.classList = 'cute';

// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';

// Append that image to the wrapper
myDiv.append(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="paraDiv">
    <p>Do or do not...</p>
    <p>...there is no try.</p>
  </div>
`;

// put this div before the unordered list from above
myList.insertAdjacentHTML('beforebegin', myHTML);

const paraDiv = myDiv.querySelector('.paraDiv');

// add a class to the second paragraph called warning
paraDiv.children[1].classList.add('warning');

// remove the first paragraph
paraDiv.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>They are ${height} tall and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
</div>`;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
