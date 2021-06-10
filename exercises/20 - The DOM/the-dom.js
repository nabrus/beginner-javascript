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

// One methode of adding onto content, but can be expensive when adding a lot of content
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// Another way is by using `insertAdjacentText` method
pizzaList.insertAdjacentText;
