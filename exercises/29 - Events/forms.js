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

// Notes on Accessibility

// Never mix up buttons and links. Do not use a button as a link. Keep both of them in their proper roles. A button is used for actions that happen inside an app/site. Links are used to change the page.

// A valid use case of prevent default on a link would be to have the user sign into site before following a link.

// Another accessibility issue to watch out for - click event on an image. User will not be able to use the keyboard and tab to it.
// One option is to wrap it in a button or you can add `role=button` and `tabindex=0` attributes in the HTML.

const myPhoto = document.querySelector('.photo');

// function handlePhotoClick() {
//   console.log('You clicked the photo');
// }

// // Tabbing to the photo will trigger the `handlePhotoClick`
// myPhoto.addEventListener('click', handlePhotoClick);

// // `keyup` listener will allow any key to fire `handlePhotoClick` after focused on it.
// myPhoto.addEventListener('keyup', handlePhotoClick);

// Better solution, having only the enter key invoke `handlePhotoClick` using some flow control. Using event.type and event.key
function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter')
    console.log('You clicked the photo with Enter!!!');
}

myPhoto.addEventListener('keyup', handlePhotoClick);
