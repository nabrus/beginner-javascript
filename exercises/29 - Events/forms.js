/*
`preventDefault` is a method of the Event interface. It is used to cancel the default action that belongs to an event.
Default behavior examples:
  Clicking on a link (<a>) will navigate to the URL specified in the href attribute.
  Submitting a form (<form>) will send the form data to the server and reload the page.
  Pressing a key in a text input field will insert the corresponding character into the field.
*/

const wesSite = document.querySelector('.wes');

// Preventing navigation to Wes' site
// wesSite.addEventListener('click', function(event) {
//   event.preventDefault();
// });

// Prevent after choice by user if ok then proceed
wesSite.addEventListener('click', function(event) {
  const changePageQuery = confirm(
    'This website might be malicious, do you want to proceed'
  );
  if (!changePageQuery) {
    event.preventDefault();
  }
});

// Prevent a form submission when a condition is set
const signup = document.querySelector('[name="signup"]');
// examples of grabbing elements in a form when using name attributes (using valid  HTML semantics by giving input elements a name)
signup.addEventListener('submit', function(event) {
  // event.preventDefault();
  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;

  if (name.includes('Stephen')) {
    alert('Sorry, no "ph" spelling of Steven');
    event.preventDefault();
  }
});

/*
Other types of events with form inputs:
  `keyup`
  `keydown`
  `focus` when an element gains focus, clicking it, tabbing to it, etc
  `blur` when an element loses focus, clicking away, tabbing away, etc
*/

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signup.name.addEventListener('keyup', logEvent);
signup.name.addEventListener('keydown', logEvent);
signup.name.addEventListener('focus', logEvent);
signup.name.addEventListener('blur', logEvent);
