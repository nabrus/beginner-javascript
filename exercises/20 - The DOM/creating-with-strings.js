const item = document.querySelector('.item');

const src = `https://picsum.photos/200`;
const desc = `Random Pics`;
const myHTML = `
<div className="wrapper">
  <h2>Cool ${desc}</h2> 
  <img src="${src}" alt="${desc}" />
</div>
`;

item.innerHTML = myHTML;

console.log(item.innerHTML);
