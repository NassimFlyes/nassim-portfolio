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

document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("nassim_77"); // Dein EmailJS User ID

  const form = document.getElementById("video-feedback-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Kein Neuladen der Seite

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name && email && message){
      emailjs.send("nassin", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
      }).then(function(response) {
        successMessage.textContent = "Ihre Nachricht wurde erfolgreich gesendet!";
        successMessage.style.backgroundColor = "#00ff99";
        successMessage.style.color = "#1e1e1e";
        successMessage.style.display = "block";

        form.reset(); // Formular zurücksetzen
        setTimeout(() => successMessage.style.display = "none", 5000);
      }, function(error) {
        successMessage.textContent = "Fehler beim Senden, bitte versuchen Sie es erneut.";
        successMessage.style.backgroundColor = "#ff5555";
        successMessage.style.color = "#fff";
        successMessage.style.display = "block";
        console.log(error);
        setTimeout(() => successMessage.style.display = "none", 5000);
      });
    } else {
      successMessage.textContent = "Bitte füllen Sie alle erforderlichen Felder aus.";
      successMessage.style.backgroundColor = "#ffcc00";
      successMessage.style.color = "#1e1e1e";
      successMessage.style.display = "block";
      setTimeout(() => successMessage.style.display = "none", 5000);
    }
  });
});




