const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(e) {
  const button = e.currentTarget;
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
