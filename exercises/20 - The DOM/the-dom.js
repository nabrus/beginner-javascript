const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
const itemAll = document.querySelectorAll('.item');
const divItem = document.querySelectorAll('div.item');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');

console.log(p); // <p>Hi I'm an item</p>
console.log(divs); // NodeList(3) [div.items, div.item, div.item]
console.log(itemAll); // NodeList(3) [div.item, article.item, div.item]
console.log(divItem); // NodeList(2) [div.item, div.item]
console.log(imgs); // NodeList [img]
console.log(item2); // <div class="item item2">...</div>
console.log(item2Image); // <img src="https://picsum.photos/200">
