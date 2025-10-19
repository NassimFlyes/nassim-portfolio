const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Default night mode, so no class initially
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  toggleBtn.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
});

function toggleDetails() {
  const details = document.getElementById("details");
  details.classList.toggle("details-hidden");
}

