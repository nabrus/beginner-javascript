const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Random Pics`;

// Note-the following is just a string not an element
const myHTML = `
<div class="wrapper">
  <h2>Cool ${desc}</h2> 
  <img src="${src}" alt="${desc}" />
</div>
`;

// This string can be dumped into to an element with innerHTML
item.innerHTML = myHTML;

// or if you need to access each node of the HTML

// Turn a string into a DOM element/node
const myFragment = document.createRange().createContextualFragment(myHTML);

// Now the HTML is elements and can be selected
console.log(myFragment.querySelector('img'));
console.log(myFragment);

// Then attach to the DOM
document.body.appendChild(myFragment);
