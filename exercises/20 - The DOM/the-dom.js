const divs = document.querySelectorAll('div');
const p = document.querySelector('p');
const itemAll = document.querySelectorAll('.item');
const divItem = document.querySelectorAll('div.item');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');

// console.log(p); // <p>Hi I'm an item</p>
// console.log(divs); // NodeList(3) [div.items, div.item, div.item]
// console.log(itemAll); // NodeList(3) [div.item, article.item, div.item]
// console.log(divItem); // NodeList(2) [div.item, div.item]
// console.log(imgs); // NodeList [img]
// console.log(item2); // <div class="item item2">...</div>
// console.log(item2Image); // <img src="https://picsum.photos/200">

const heading = document.querySelector('h2');
// console.log(heading.textContent); // I am a heading
// // Set the texContent property on the 'h2' element
// heading.textContent = 'May the force be with you';
console.log(heading.textContent); // May the force be with you
console.log(heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// One method of adding onto content. Note - can be expensive when adding a lot of content
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// Another way is by using `insertAdjacentText` method
pizzaList.insertAdjacentText('afterbegin', '🍕');
pizzaList.insertAdjacentText('beforeend', '🍕');

/* CLASSES */
const pic = document.querySelector('.animatePic');
// The `Element.classList` is a read-only property that returns a live
// DOMTokenList collection of the class attributes of the element. This
// can then be used to manipulate the class list.
pic.classList.add('open');
pic.classList.remove('anotherClass');
console.log(pic.classList);

// Event Listener example to animate the pic from round to regular when clicked.
function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

// Attributes - updating, adding, getters/setters
pic.alt = 'another random  pic'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter, *note - naturalWidth is a getter only, you cannot set
pic.width = 200; // setter

// Methods
/* These methods differ from using the above setters/getters because you can
also set custom named attributes. Note that changing the name of attributes is
discouraged from using. See Data attributes below for proper use of adding data
to an element */
pic.setAttribute('alt', 'no description available');
console.log(pic.getAttribute('alt'));

// Data Attributes
/* `data-* attributes allow us to store extra information on standard, semantic
HTML elements without other hacks such as non-standard attributes, or extra
properties on DOM. */
const custom = document.querySelector('.custom');
// To get the 'data-` attribute you call `dataset`, which returns an object with all the property values.
console.log(custom.dataset);

// An example of why you would use data attributes
// An alert box when pic is clicked
custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});
