/*
The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.
*/

// Select elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButt = document.querySelector('.shake');

// Setup our canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// Write a draw function

// Write a handler for the keys

// Clear or shake function

// Listen for arrow keys
