/*
The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.
*/

// Select elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
// `.getContext()` method gets that element's context—the thing onto which the drawing will be rendered.
const ctx = canvas.getContext('2d');
const shakeButt = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup our canvas for drawing
// Make a variable called width and height from the same properties on our canvas
/* 
const width = canvas.width;
const height = canvas.width;
This can be changed into a shorter form, which is called "destructuring"
*/
const { width, height } = canvas;

// Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// Color changing setup using `hsl` for page load
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // location
ctx.lineTo(x, y); // location
ctx.stroke(); // draw it

/*
'options object' is a common pattern used to pass a set of named parameters to a function. This approach allows for more flexible and readable function calls, especially when a function has multiple parameters or when some parameters are optional.
*/
// Write a draw function
function draw({ key }) {
  // `{key}` -  object destructuring - taking properties and renaming into proper variables
  console.log(key);
  // Increment hue
  hue += 5;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // Start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // Move the x and y values based on user input. Using a `switch` statement
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys
function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault(); // So arrow keys don't scroll screen
    draw({ key: event.key });
  }
}

// Clear or shake function
function clearCanvas() {
  canvas.classList.add('shake');
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake');
      canvas.classList.remove('shake');
    },
    { once: true } // This option will automatically remove the listener **
  );
  ctx.reset();
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = MOVE_AMOUNT;
}
// ** If `once` option not used the function would keep adding event listeners

// Listen for arrow keys
window.addEventListener('keydown', handleKey);

// Listen for shake button click
shakeButt.addEventListener('click', clearCanvas);
