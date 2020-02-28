window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});
window.sr = ScrollReveal();
sr.reveal('#about', {
  duration: 2000,
  origin: 'right',
});
window.sr = ScrollReveal();
sr.reveal('#servicios', {
  duration: 2000,
  origin: 'left',
});
window.sr = ScrollReveal();
sr.reveal('#servicios2', {
  duration: 2000,
  origin: 'top',
});
window.sr = ScrollReveal();
sr.reveal('#formulario', {
  duration: 2000,
  origin: 'left',
});
window.sr = ScrollReveal();
sr.reveal('#footer', {
  duration: 2000,
  origin: 'right',
});

// SMOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});
