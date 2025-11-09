const popupOverlay = document.getElementById('popup-overlay');

  function togglePopup() {
    popupOverlay.classList.toggle('popup-hidden');
  }

  // close popup when clicking outside content
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.add('popup-hidden');
    }
  });

