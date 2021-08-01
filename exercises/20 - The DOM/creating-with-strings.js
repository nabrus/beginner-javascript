const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Random Pics`;
const myHTML = `
<div class="wrapper">
  <h2>Cool ${desc}</h2> 
  <img src="${src}" alt="${desc}" />
</div>
`;

item.innerHTML = myHTML;

console.log(item.innerHTML);
