// Selecting elements
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

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

  /*
  Method 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
*/

  // Method 2 - using the `find()` method on the array of tabPanels
  // Note: used `Array.from` to convert tabPanels variable (nodeList) into an array
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute(`aria-labelledby`) === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
