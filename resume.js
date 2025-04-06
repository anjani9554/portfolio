// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
});

// Scroll animation on load
window.dispatchEvent(new Event('scroll'));

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Smooth animation for profile image on load
window.addEventListener('load', () => {
  const profileImage = document.getElementById('profileImage');
  profileImage.classList.add('active');
});
