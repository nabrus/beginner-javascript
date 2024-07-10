/*
`if` statements in JavaScript are a fundamental control structure that allows
you to execute code conditionally based on whether a specified condition
evaluates to true or false.
*/

/*

Syntax

`if (condition) {
  // code to execute if the condition is true
}`

*  `condition`: An expression that evaluates to `true` or `false`. 
*  Code Block: The code within the curly braces `{}` runs if the condition is `true`.

*/

/* eslint-disable */

if (10 > 2) {
  console.log('Yes it is!');
}

function slugify(sentence, lowercase) {
  const slug = sentence.replace(/\s/g, '-');
  if (lowercase) {
    return slug.toLowerCase();
  }
  return slug;
}
