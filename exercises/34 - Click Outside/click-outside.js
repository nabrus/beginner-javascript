const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // Grab the img src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // Populate modal with new info
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="${name}" />
  <p>${desc}</p>
  `;
  // Show the modal
  modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

// Close modal by removing the `open` class
function closeModal() {
  modalOuter.classList.remove('open');
}

// Close by clicking any area outside
modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner'); // boolean `not`
  if (isOutside) {
    closeModal();
  }
});

// esc key to close modal also
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
