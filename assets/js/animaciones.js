window.onload = function () {
  window.scrollTo(0, 0);
}

// Cambio de color de la página
let banner = document.querySelector('.banner');
let nav = document.querySelector('.navbar')
let diaNoche = document.querySelector('.dia__noche')

diaNoche.onclick = function () {
  banner.classList.toggle('night')
  nav.classList.toggle('night')
}


// Animación al elegir un enlace en el nav 
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', function () {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Nombre automático 
let typingText = new Typed("#text", {
  strings: ["Manuel Antón"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});

// Animación de los enlaces del nav cuando se avance con el scroll
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentSectionIndex = 0;
  let closestDistance = Infinity;

  sections.forEach((section, index) => {
    const sectionRect = section.getBoundingClientRect();
    const distanceToViewport = sectionRect.bottom - 250;
    if (distanceToViewport < closestDistance && distanceToViewport >= -sectionRect.height) {
      closestDistance = distanceToViewport;
      currentSectionIndex = index;
    }
  });

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[currentSectionIndex].classList.add('active');
});
