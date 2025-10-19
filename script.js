const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Default night mode, so no class initially
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  toggleBtn.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
});

function togglePopup() {
  const popup = document.getElementById('popup-overlay');
  popup.classList.toggle('popup-hidden');
}

function closePopup(event) {
  if (event.target.id === 'popup-overlay') {
    togglePopup();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const popup = document.getElementById('popup-overlay');
    if (!popup.classList.contains('popup-hidden')) {
      togglePopup();
    }
  }
});






