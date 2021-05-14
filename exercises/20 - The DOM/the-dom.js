const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
const itemAll = document.querySelectorAll('.item');
const divItem = document.querySelectorAll('div.item');
const imgs = document.querySelectorAll('.item img');

console.log(p); // <p>Hi I'm an item</p>
console.log(divs); // NodeList(3) [div.items, div.item, div.item]
console.log(itemAll); // NodeList(3) [div.item, article.item, div.item]
console.log(divItem); // NodeList(2) [div.item, div.item]
console.log(imgs); // NodeList [img]
