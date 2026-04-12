document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('ready');

  const toast = document.createElement('div');
  toast.className = 'toast';
  document.body.appendChild(toast);

  const buttons = document.querySelectorAll('.button, .nav-button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const text = button.textContent.trim();
      let message = 'Opening link...';

      if (text.includes('Free')) {
        message = 'Starting Spotify Free...';
      } else if (text.includes('Premium')) {
        message = 'Premium is coming soon.';
      } else if (text.includes('Log in')) {
        message = 'Login flow coming soon.';
      } else if (text.includes('Sign up')) {
        message = 'Sign up flow coming soon.';
      }

      showToast(message);
    });
  });

  const featureCards = document.querySelectorAll('.feature-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
  });

  featureCards.forEach((card) => observer.observe(card));
});

function showToast(message) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('visible');
  }, 2200);
}
