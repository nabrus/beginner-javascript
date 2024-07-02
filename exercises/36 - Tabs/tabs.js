// Selecting elements
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

// Handler function
function handleTabClick(event) {
  // Hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  // Mark all tabs as unselected
  tabButtons.forEach(tab => {
    // tab.ariaSelected = false; Note this code does not work on aria attributes
    tab.setAttribute('aria-selected', false);
  });

  // Mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // Find the associated tabPanel and show it
  const { id } = event.currentTarget; // Note: destructuring
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
