const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');

  // Disable scrolling when the menu is open
  document.body.style.overflow = document.body.classList.contains('nav-open') ? 'hidden' : 'auto';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');

    // Re-enable scrolling after closing the menu
    document.body.style.overflow = 'auto';
  });
});
