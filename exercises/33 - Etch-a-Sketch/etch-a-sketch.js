/*
The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.
*/

// Select elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
// `.getContext()` method gets that element's context—the thing onto which the drawing will be rendered.
const ctx = canvas.getContext('2d');
const shakeButt = document.querySelector('.shake');

// Setup our canvas for drawing
// Make a variable called width and height from the same properties on our canvas
/* 
const width = canvas.width;
const height = canvas.width;
This can be changed into a shorter form, which is called "destructuring"
*/
const { width, height } = canvas;

// Create random x and y starting points on the canvas

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200); // location
ctx.lineTo(200, 200); // location
ctx.stroke(); // draw it

// Write a draw function

// Write a handler for the keys

// Clear or shake function

// Listen for arrow keys
