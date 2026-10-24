const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');   // Show/hide nav
    hamburger.classList.toggle('open'); // Animate hamburger to X and back
  });